import ReactLoading from 'react-loading';

export default function Loading({ isLoading, size }) {
  return <ReactLoading type={isLoading ? "spinningBubbles" : 'blank'} color="#78c2c5" width={size || 50} />
}