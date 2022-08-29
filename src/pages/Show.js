import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { apiGet } from '../misc/config';

const Show = () => {
  const { id } = useParams();

  const [show, setShow] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(res => {
        setTimeout(() => {
          if (isMounted) {
            setShow(res);
            setIsLoading(false);
          }
        }, 2000);
      })
      .catch(error => {
        if (isMounted) {
          setError(error.message);
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [id]);

  console.log(show);
  if (isLoading) {
    return <div>Data is being loaded</div>;
  }
  if (error) {
    return <div>Error occured:{error}</div>;
  }
  return <div>This is show page</div>;
};

export default Show;
