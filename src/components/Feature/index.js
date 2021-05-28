import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Today's Pizza!</h1>
      <p>Specifically engineered to be big, thin, and perfectly foldable.</p>
      <FeatureButton>Order Here</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
