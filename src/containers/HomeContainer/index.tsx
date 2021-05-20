import React, { FC, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getPicSumImages} from '../../redux/actions/action';
import HomeView from './HomeView';

const HomeContainer: FC = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state?.picSum?.data);

  useEffect(() => {
    dispatch(getPicSumImages(data));
  },[]);

  return <HomeView data={data} />;
};

export default HomeContainer;
