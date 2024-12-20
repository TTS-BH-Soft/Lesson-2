import {
  SocialContainer,
  SocialIconsWrapper,
  SocialIcon,
} from './SocialConnectStyled'

// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const SocialConnect = () => {
  return (
    <SocialContainer>
      <h3 tw="text-lg font-bold text-gray-800 mb-4">Social Connect</h3>
      <SocialIconsWrapper>
        <SocialIcon>{/* <FaFacebook tw="text-blue-600" /> */}</SocialIcon>
        <SocialIcon>{/* <FaTwitter tw="text-blue-400" /> */}</SocialIcon>
        <SocialIcon>{/* <FaInstagram tw="text-pink-500" /> */}</SocialIcon>
        <SocialIcon>{/* <FaLinkedin tw="text-blue-700" /> */}</SocialIcon>
      </SocialIconsWrapper>
    </SocialContainer>
  )
}

export default SocialConnect
