// @flow
import React, {PureComponent} from 'react'
import {Box} from 'indoqa-react-fela'
import MainMenuTemplate from '../../commons/components/templates/MainMenuTemplate'

import WordsSearch from './WordsSearch.redux'
import WordsResults from './WordsResults.redux'

export default class WordsPage extends PureComponent<{}> {

  public render() {
    return (
      <MainMenuTemplate title="Words">
        <Box m={1}>
          <WordsSearch />
          <WordsResults />
        </Box>
      </MainMenuTemplate>
    )
  }
}
