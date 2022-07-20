import React from 'react'
import Plyr from './plyr'
import Fade from 'react-reveal/Fade'

const Video = ({ video }) => {

  return (
    <section className='video'>
      <Fade distance='40px' bottom>
        <div className='video__inner'>
          <div className='video__embed'>
            <Plyr
              type="youtube"
              videoId={video}
              urls={{
                youtube: {
                  api: 'https://noembed.com/embed?url={0}'
                }
              }}
            />
          </div>
        </div>
      </Fade>
    </section>
  )
}

Video.defaultProps = {
  video: ``,
}

export default Video