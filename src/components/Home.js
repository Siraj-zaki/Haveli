import React from 'react'
import '../reset.css'
import '../style.css'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Drawer from './drawer'
import logo from '../assets/logo.png'
import jett from '../assets/jett.png'
import video1 from '../assets/jett.mp4'
import omen from '../assets/omen.png'
import pheonix from '../assets/pheonix.png'
import video3 from '../assets/pheonix.mp4'
import video2 from '../assets/omen.mp4'
import SearchBar from './SearchBar'


class Home extends React.Component {
    render() {
        const makeStyles = {

            title: {
                fontSize: 14,
            },
            pos: {
                marginBottom: 12,
            },
        };
        const style = {
            root: {
                flexGrow: 1,
            },
            title: {
                flexGrow: 1,
            },
        }
        return (
            <div className="home">
                <nav>
                    <AppBar position="fixed">
                        <Toolbar>
                            <IconButton edge="start" className={style.menuButton} color="inherit" aria-label="menu">
                                <Drawer />
                            </IconButton>
                            <Button className="logo-1">
                                <img src={logo} height="30" width="50" alt="" />
                            </Button>
                            <SearchBar />
                            <div className="right-side">
                                <Button className="link link-1">Home</Button>
                            </div>
                        </Toolbar>
                    </AppBar>
                </nav>
                <main>
                    <section className="main">
                        <button className="btn-main">
                            Welcome To Haveli
                        </button>

                    </section>
                    <section className="section-1">

                        <video className="video video-1" loop autoPlay muted src={video1}>

                        </video>
                        <div className="grid">
                            <div className="grid-1">

                                <img className="img-1" src={jett} height="auto" width="350" alt="" />
                            </div>

                            <div className="grid-2">
                                <Card className="card-style" style={{ width: '350px', minWidth: '300px' }}>
                                    <CardContent className="card-content">
                                        <h1 className="heading" style={{ fontWeight: 'bold', padding: 10, color: 'white' }}>JETT</h1>
                                        <p style={{ padding: 10, color: 'white' }}>"Representing her home country
                                        of South Korea, Jett's agile
                                        and evasive fighting style lets
                                        her take risks no one else can.
                                        She runs circles around every
                                        skirmish, cutting enemies before
                                        they even know what hit them."


</p>
                                        <br />
                                        <p style={{ padding: 10, color: 'white' }}>
                                            From Korea comes Jett, an agile fighter who prioritizes
                                            movement over everything. Her abilities include a
                                            teleportation-based dash and an updraft that
                                            her reach higher ledges. She also has a smokebomb
                                            ability to hinder sightlines and a powerful Bladestorm
                                            ultimate that deals moderate-to-heavy damage and remains
                                            accurate even while she's moving [1]. Jett is one of the
                                            few Agents with a passive ability. Holding the jump key
                                            while in the air will allow Jett to slow her descent
                                            .
</p>
                                    </CardContent>
                                    <CardActions>
                                        <Button style={{ padding: 10 }} size="small">Learn More</Button>
                                    </CardActions>
                                </Card>

                            </div>
                        </div>
                    </section>
                    <section className="omen">
                        <video className="video video-1" loop autoPlay muted src={video2}>

                        </video>
                        <div className="grid">
                            <div className="grid-1">
                                <Card className="card-style" style={{ width: '350px', minWidth: '300px' }}>
                                    <CardContent className="card-content">
                                        <h1 className="heading" style={{ fontWeight: 'bold', padding: 10, color: 'white' }}>OMEN</h1>
                                        <p style={{ padding: 10, color: 'white' }}>Omen hunts in the shadows.
                                        He renders enemies blind, teleports across the field, then lets
                                        paranoia take hold as his foe scrambles to learn where he might
                                        strike next [1].


</p>
                                        <br />
                                        <p style={{ padding: 10, color: 'white' }}>
                                            A man with mysterious origins, Omen is focused on
                                            hindering the vision of his enemies with things like
                                            an orb that strikes those in his sights with nearsightedness
                                            and another that bursts to obscure the vision of everyone
                                            nearby. He can also teleport a short distance,
                                            or use his ultimate to teleport anywhere on the map as a shadow [2].
</p>
                                    </CardContent>
                                    <CardActions>
                                        <Button style={{ padding: 10 }} size="small">Learn More</Button>
                                    </CardActions>
                                </Card>

                            </div>
                            <div className="grid-2">
                                <img className="img-1" onMouseOver src={omen} height="auto" width="350" alt="" />
                            </div>
                        </div>
                    </section>
                    <section className="pheonix">

                        <video className="video video-1" loop autoPlay muted src={video3}>

                        </video>
                        <div className="grid">
                            <div className="grid-1">

                                <img className="img-1" onMouseOver src={pheonix} height="auto" width="350" alt="" />
                            </div>
                            <div className="grid-2">

                                <Card className="card-style" style={{ width: '350px', minWidth: '300px' }}>
                                    <CardContent className="card-content">
                                        <h1 className="heading" style={{ fontWeight: 'bold', padding: 10, color: 'white' }}>PHEONIX</h1>
                                        <p style={{ padding: 10, color: 'white' }}>Phoenix’s star power shines through
                                        in his fighting style, igniting the battlefield with his flash and flare.Whether
                                        he’s got backup or not, he’s rushing in to fight on his own terms [2]..</p>
                                        <br />
                                        <p style={{ padding: 10, color: 'white' }}>
                                            The fiery Brit can wield the power of flame to essentially
                                            reshape the battlefield into how he sees fit. With exploding
                                            fireballs that damage enemies and heal him, a vision-blocking
                                            wall of fire, and a blinding fire burst, Phoenix is great at
                                            manipulating the flow of the match. His ultimate grants him
                                            the ability to be reborn if he's killed during its duration,
                                            galvanizing him to make bold moves he wouldn't otherwise make [3].
                                            Phoenix can heal himself by standing in his own fire.</p>
                                    </CardContent>
                                    <CardActions>
                                        <Button style={{ padding: 10 }} size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </div>
                        </div>
                    </section>
                    <section className="our-team">
                        <div className="grid">
                            <div className="grid-1">
                                <Card className="card-style" style={{ width: '350px', minWidth: '300px' }}>
                                    <CardContent className="card-content">
                                        <h1 className="heading" style={{ fontWeight: 'bold', padding: 10, color: 'white' }}>FC CLAN</h1>
                                        <li style={{ padding: 10, color: 'white' }}>
                                            HARRY GUNDA
                                        </li>
                                        <li style={{ padding: 10, color: 'white' }}>
                                            JILLAD
                                        </li>
                                        <li style={{ padding: 10, color: 'white' }}>
                                            TSM BIG SMOKE
                                        </li>
                                        <li style={{ padding: 10, color: 'white' }}>
                                            TSM SUBORAZA
                                        </li>
                                        <li style={{ padding: 10, color: 'white' }}>
                                            TSM BIRD
                                        </li>
                                        <li style={{ padding: 10, color: 'white' }}>
                                            TSM BLOODY VENOM
                                        </li>

                                    </CardContent>
                                    <CardActions>
                                        <Button style={{ padding: 10 }} size="small">Learn More</Button>
                                    </CardActions>
                                </Card>

                            </div>
                            <div className="grid-2">
                                <Card className="card-style" style={{ width: '350px', minWidth: '300px' }}>
                                    <CardContent className="card-content">
                                        <h1 className="heading" style={{ fontWeight: 'bold', padding: 10, color: 'white' }}>NO CLAN</h1>
                                        <li style={{ padding: 10, color: 'white' }}>
                                            SIRAJ MUNEER
                                        </li>
                                    </CardContent>
                                    <CardActions>
                                        <Button style={{ padding: 10 }} size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </div>
                            <div className="grid-2">
                                <Card className="card-style" style={{ width: '350px', minWidth: '300px' }}>
                                    <CardContent className="card-content">
                                        <h1 className="heading" style={{ fontWeight: 'bold', padding: 10, color: 'white' }}>MM CLAN</h1>
                                        <li style={{ padding: 10, color: 'white' }}>
                                            MAJOR SAAB
                                        </li>
                                        <li style={{ padding: 10, color: 'white' }}>
                                            MOOSA
                                        </li>
                                        <li style={{ padding: 10, color: 'white' }}>
                                            NAWAZ SHEREEF
                                        </li>
                                        <li style={{ padding: 10, color: 'white' }}>
                                            DEAD PERSON
                                        </li>

                                    </CardContent>
                                    <CardActions>
                                        <Button style={{ padding: 10 }} size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </div>

                        </div>
                    </section>
                </main>
            </div>
        )
    }
}
export default Home