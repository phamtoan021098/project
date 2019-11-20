import React,{Component} from 'react';
import Banner from '../header-footer/Banner';
import Content from './Content';
import BrandLogo from './BrandLogo';
import IntroProducts from './IntroProducts';
import Types from './Types';
import Footer from '../header-footer/Footer';
class Home extends Component{
    render(){
        return(
            <div>
                <Banner />
                <Content />
                <IntroProducts />
                <Types />
                <BrandLogo/>
                <Footer />
            </div>
        )
    }
}
export default Home;