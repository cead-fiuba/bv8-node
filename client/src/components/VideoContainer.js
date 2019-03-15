import React, { Component } from 'react';
import Video from './Video'
import { Row, Col, Button, Carousel } from 'antd';
import Header from './Header'
import Body from './Body'
import style from '../style/customStyle.css'

class VideoContainer extends Component {

  onChange = (a, b, c) => {
    console.log(a, b, c);
  }

  render() {

    console.log('props', this.props);
    const videoId = this.props.match.params.videoId;
    return (
      <Row>
        <Col span={6}>
        </Col>
        <Col span={12}>
          <Header
            videoId={videoId}
          />
          <Video
            videoId={videoId}
          />
          <Body />
        </Col>
        <Col span={6}>
        </Col>

      </Row>

    )
  }
}

export default VideoContainer;