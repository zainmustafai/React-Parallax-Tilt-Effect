import Tilt from 'react-parallax-tilt';

// LEARN MORE AT : https://mkosir.github.io/react-parallax-tilt/?path=/story/react-parallax-tilt--parallax-effect

const RootLayout = () => {
  return (
    <div className="grid w-screen h-screen App place-content-center">
      <Tilt
        glareEnable={true}
        tiltReverse={true}
        tiltAngleXInitial={-20}
        tiltAngleYInitial={20}
        perspective={2000}
        className='w-64 h-64 mx-auto'
      >
        <div style={{
          backgroundColor: 'darkgreen',
          height: '100%',
        }}>
          <h1>React Parallax Tilt 👀</h1>
        </div>
      </Tilt>
    </div>
  )
}

export default RootLayout