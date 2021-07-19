import Head from 'next/head'
import Carousel from '../components/Carousel'
import FlexBanner from '../components/FlexBanner'
import Logo from '../components/Logo'
import SpecialBanner from '../components/SpecialBanner';
import ParaWithButtons from '../components/ParaWithButtons';
import { CategoriesSection , CategoryBlock } from '../components/CategoriesSection';
import { StrikedPriceWithTime } from '../components/StrikedPrice';
import ItemBlock from '../components/ItemBlock';

export default function Home() {
  let carouselChildren = [
    {
      src : 'https://images.pexels.com/photos/749353/pexels-photo-749353.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      href : '#link1'
    },
    {
      src : 'https://images.pexels.com/photos/193004/pexels-photo-193004.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      href : '#link2'
    },
    {
      src : 'https://images.pexels.com/photos/2529172/pexels-photo-2529172.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      href : '#link3'
    },
    {
      src : 'https://images.pexels.com/photos/6969775/pexels-photo-6969775.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      href : '#link4'
    },
  ]
  return (
    <>
      <Carousel carouselChildren={carouselChildren}/>
      <FlexBanner>
        <Logo/>
        <ParaWithButtons paraText={"Become a Member to Enjoy Exclusive Benefits , and key alerts on various offers and items."}/> 
      </FlexBanner>
      <CategoriesSection>
        <CategoryBlock block_heading = {"Grocery"}/>
        <CategoryBlock block_heading = {"Grocery"}/>
        <CategoryBlock block_heading = {"Grocery"}/>
        <CategoryBlock block_heading = {"Grocery"}/>
        <CategoryBlock block_heading = {"Grocery"}/>
      </CategoriesSection>
      <SpecialBanner heading={"Daily Offers"} highlight_heading={"Rolex Watch"} isLeft={true}>
        <div>
          <StrikedPriceWithTime/> 
        </div>
        <ItemBlock itemName={"Iphone8"} itemNewPrice={"Rs 80,000"} itemOldPrice={"Rs 75,000"}/>
        <ItemBlock itemName={"Iphone8"} itemNewPrice={"Rs 80,000"} itemOldPrice={"Rs 75,000"}/>
        <ItemBlock itemName={"Iphone8"} itemNewPrice={"Rs 80,000"} itemOldPrice={"Rs 75,000"}/>
        <ItemBlock itemName={"Iphone8"} itemNewPrice={"Rs 80,000"} itemOldPrice={"Rs 75,000"}/>
      </SpecialBanner>
    </>
  )
}
