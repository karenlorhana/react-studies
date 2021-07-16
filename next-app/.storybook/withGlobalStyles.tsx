import { StoryFn } from '@storybook/addons'
import GlobalStyles from '../src/styles/global'

const withGlobalStyles = (StoryFn: StoryFn) => (
  <>
    <GlobalStyles />
    {StoryFn()}
  </>
)

export default withGlobalStyles
