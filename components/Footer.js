import ListWithHeading from "./ListWithHeading";
import { LogoWithImage } from "./Logo";
import { Seperator } from './MiscComponents';

const FooterLinksAbout = [
    {
        linkName : 'Link1',
        linkURL : '#link1'
    },
    {
        linkName : 'Link1',
        linkURL : '#link1'
    },
    {
        linkName : 'Link1',
        linkURL : '#link1'
    },
    {
        linkName : 'Link1',
        linkURL : '#link1'
    },
]


const Footer = ()=>{
    return <footer className='site-footer'>
        <LogoWithImage/>
        <Seperator gap="15px"/>
        <div className='footer-wrapper'>
            <div className='footer-links-wrapper'>
                <ListWithHeading list_heading={"About"} listItems={FooterLinksAbout}></ListWithHeading>
                <ListWithHeading list_heading={"Brands"} listItems={FooterLinksAbout}></ListWithHeading>
                <ListWithHeading list_heading={"Commerce"} listItems={FooterLinksAbout}></ListWithHeading>
            </div>
            <div className='empty-space'></div>
        </div>
    </footer>
}

export default Footer;