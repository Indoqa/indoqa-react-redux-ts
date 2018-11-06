import {Box} from 'indoqa-react-fela'
import * as React from 'react'

interface State {
  filename: string | null,
  size: number | null,
  type: string | null,
  data_uri: string | null,
  data: string | null,
}

const INITIAL_STATE: State = {
  filename: null,
  size: null,
  type: null,
  data_uri: null,
  data: null,
}

export default class Uploader extends React.Component<{}, State> {

  private inputRef = React.createRef<HTMLInputElement>()

  constructor(props: {}) {
    super(props)
    this.state = INITIAL_STATE
    this.handleChange = this.handleChange.bind(this)
    this.reset = this.reset.bind(this)
    this.renderFileInfo = this.renderFileInfo.bind(this)
  }

  public render() {
    return (
      <Box>
        <form encType="multipart-formdata" onSubmit={this.handleSubmit}>
          <input type="file" onChange={(e) => this.handleChange(e.target.files)} ref={this.inputRef}/>
        </form>
        <br/>
        {this.renderFileInfo()}
      </Box>
    )
  }

  private renderFileInfo() {
    if (!this.state.filename) {
      return null
    }
    return (
      <section>
        <p>Name: {this.state.filename}</p>
        <p>Size: {this.state.size}</p>
        <p>Mime-type: {this.state.type}</p>
        <Box pt={1} pb={1}>
          <img src={this.state.data_uri!} width="200"/>
        </Box>
        <button onClick={() => this.reset()}>Reset</button>
        <br/>
      </section>
    )
  }

  private handleSubmit(e: any) {
    e.preventDefault()
  }

  private handleChange(files: FileList | null) {
    if (!files) {
      return
    }
    const self = this
    const file: File = files[0]
    self.setState({filename: file.name})
    self.setState({size: file.size})
    self.setState({type: file.type})

    const reader = new FileReader()
    reader.onload = (upload: any) => {
      const result = upload.target.result
      self.setState({data_uri: result})
      self.setState({data: result.substring(result.indexOf(',') + 1)})
    }
    reader.readAsDataURL(file)
  }

  private reset() {
    this.setState(INITIAL_STATE)
    if (this.inputRef.current) {
      this.inputRef.current.value! = ''
    }
  }
}
