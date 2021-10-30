import Select from 'react-select';
import { Button, Card, Container, Title, P, CardLoader } from "components";
import { useCpt } from "hooks";
import { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';

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
    <div className='archive'>
      <Container className='archive__container'>
        <div className='archive__header'>
          {typeFilter &&
            <div className='archive__type-filter'>
              <Select
                className='archive__select'
                classNamePrefix='archive'
                onChange={handleChange}
                options={[
                  {value: 'all', label: 'All'}, ...options
                ]}
              />
            </div>
          }

          {search &&
            <div className='archive__search'>
              <input 
                {...register('key')}
                autoComplete='false'
                className='archive__search-input'
                placeholder='Search...'
              />
            </div>
          }
        </div>
        <div className='archive__content'>
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
                    <div key={i} className='archive__section'>
                      <div className='archive__section-header'>
                        <Title tag='h2'>{featuredSectionLabel}</Title>
                        <Button color='secondary' isAnchor={false}>{viewAllLabel}</Button>
                      </div>

                      <div className={`archive__section-content ${allowFeatured && postsQuantity > 4 ? 'archive__section-content--featured' : ''}`}>
                        {currentPostData.map(post => {
                          return (
                            <Card
                              key={post.databaseId}
                              {...post}
                            />
                          )
                        })}
                      </div>
                    </div>
                  
                })
              : // if there aren't posts...
                <div className='archive__no-results'>
                  <P>No posts found matching your selections.</P>
                </div>

            : // Is Loading
              <div className='archive__section-content'>
                <CardLoader />
                <CardLoader />
                <CardLoader />
              </div>
          }
        </div>
      </Container>
    </div>
  )
}

export default Archive;
