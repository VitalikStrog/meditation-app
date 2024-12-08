import React from 'react';

import { SafeAreaView } from 'react-native';

const Content = ({ children }: { children: any }) => {
  return <SafeAreaView className="flex-1 mx-5 my-3">{children}</SafeAreaView>;
};

export default Content;
