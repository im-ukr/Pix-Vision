import styled from 'styled-components';
import useModel from '../../hooks/useModel';
import SharePhoto from '../Models/Share-Photo';
import AddPostButton from '../UI/Post-Button';

export const HomeLayout = ({ children }) => {
  const { isModel, closeModel, openModel } = useModel();

  return (
    <Layout>
      {isModel && <SharePhoto closeModel={closeModel} />}
      <AddPostButton openModel={openModel} />
      {children}
    </Layout>
  );
};
const Layout = styled.div`
  padding: 20px 0;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
`;
