import Select from 'react-select';
import { useCpt } from "hooks";
import { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import styles from './Archive.module.scss'
import Container from 'components/atoms/Container/Container';
import Title from 'components/atoms/Title/Title';
import Button from 'components/atoms/Button/Button';
import Card from 'components/molecules/Card/Card';
import CardLoader from 'components/atoms/CardLoader/CardLoader';
import P from 'components/atoms/P/P';

const Archive = ({ postTypes, typeFilter, search }) => {
  const { register, control, reset } = useForm();

  // Watch Search Input
  const key = useWatch({
    control,
    name: 'key', 
    defaultValue: ''
  });

  // Select's option
  const options = postTypes.map(({ postType, filterLabel }) => {
    return {
      value: postType,
      label: filterLabel
    }
  })

  // Options Selected
  const [optionSelected, setOptionSelected] = useState(options);

  // Get CPT's Data
  const { data, isLoading } = useCpt({
    postType: Array.isArray(optionSelected) ? optionSelected.map( post => post.value) : optionSelected.value,
    key
  })

  // Select Handle Change
  const handleChange = (selectedOption) => {
    // Clear Search Input
    reset({ key: '' })

    if (selectedOption.value === 'all') {
      setOptionSelected(options)
    } else {
      setOptionSelected(selectedOption);
    }
  }

  const postSections = postTypes.filter(({ postType }) => Array.isArray(optionSelected) ? optionSelected.find(({ value }) => postType === value) : postType === optionSelected.value);
  const thereArePosts = postTypes.some(({ postType }) => data?.[`cpt${postType}s`]?.nodes.length > 0);

  return (
    <Container className={styles.container}>
      <div className={styles.header}>
        {typeFilter &&
          <div className={styles.typeFilter}>
            <Select
              classNamePrefix='archive'
              onChange={handleChange}
              options={[
                {value: 'all', label: 'All'}, ...options
              ]}
            />
          </div>
        }

        {search &&
          <input 
            {...register('key')}
            autoComplete='false'
            className={styles.searchInput}
            placeholder='Search...'
          />
        }
      </div>
      <div className={styles.content}>
        {!isLoading 
          ? // Finished loading
            thereArePosts 
            ? // if there are posts...
              postSections.map(({ featuredSectionLabel, postType, viewAllLabel, allowFeatured }, i) => {
                const currentPostType = `cpt${postType}s`;
                const currentPostData = data?.[currentPostType].nodes;
                const postsQuantity = currentPostData.length;

                return postsQuantity 
                && 
                  <div key={i} className={styles.section}>
                    <div className={styles.sectionHeader}>
                      <Title tag='h2'>{featuredSectionLabel}</Title>
                      <Button color='secondary' isAnchor={false}>{viewAllLabel}</Button>
                    </div>

                    <div className={`${styles.sectionContent} ${allowFeatured && postsQuantity > 4 ? styles.featured : ''}`}>
                      {currentPostData.map(post => (
                        <Card
                          key={post.databaseId}
                          {...post}
                        />
                      ))}
                    </div>
                  </div>
                
              })
            : // if there aren't posts...
              <>
                <P>No posts found matching your selections.</P>
              </>

          : // Is Loading
            <div className={styles.sectionContent}>
              <CardLoader />
              <CardLoader />
              <CardLoader />
            </div>
        }
      </div>
    </Container>
  )
}

export default Archive;
