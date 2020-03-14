import React from 'react';
import useApi from '../hooks/useApi';
import OutlineButton from '../components/OutlineButton';

const MainCategory = () => {
  const { categories, error, isLoading } = useApi();
  console.log(categories);
  return(
    <div>
      <p>hey</p>
    { isLoading ? (<p>Loading</p>
    ) : error ? (<p>{error}</p>
      ) : categories ? (<div>

<OutlineButton to="/portfolio" category="privatbolig">
                        Privat Bolig
                    </OutlineButton>
      </div>) :  null}
    </div>
  )
}
export default MainCategory;