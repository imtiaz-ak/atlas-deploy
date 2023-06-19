
import './Sidebar.css'
import MediaCardVideo from '../Common/MediaCard/MediaCardVideo'

export default function Sidebar() {
  return (
    <>
        <section className="sidebar">
            <div className='sidebar__container'>
                <div className='sidebar__container__heading'>
                    <h4 className="p-font-size-75 font-color-2">REGION</h4>
                    <h2 className="p-font-size-400">District</h2>
                </div>
                <hr />
                <div className='sidebar__container__details'>
                    <h4 className='p-font-size-75 font-color-2'>PROJECTED CHANGE IN MEAN</h4>
                    <h2 className='p-font-size-400'>Cooling Degree Days</h2>
                    <div className='sidebar__container__details__flex'>
                        <span className=''>High Carbon</span> 
                        <span className='sidebar__arrow'>&rarr;</span> 
                        <span className=''>More Climate Change</span> 
                    </div>

                    <div className='sidebar__container__details__flex'>
                        <div>
                            <h4 className='p-font-size-75 font-color-2'>1975-2005</h4>
                            <h2 className='p-font-size-400'>23.2</h2>
                        </div> 
                        <span className='sidebar__arrow'>&rarr;</span> 
                        <div>
                            <h4 className='p-font-size-75 font-color-2'>1975-2005</h4>
                            <h2 className='p-font-size-400'>23.2</h2>
                        </div>  
                    </div>
                    <div>
                        <h4 className='p-font-size-75 font-color-2'>Up</h4>
                        <h2 className='p-font-size-400'>+30.3</h2>
                    </div>
                </div>
                <div className="sidebar__container__buttonGroup">
                    <button className='customBtn'>
                        <span>Stories</span>
                        <span>6</span>
                    </button>
                    <button className='customBtn'>
                        <span>Entities</span>
                        <span>2</span>
                    </button>
                </div>
                <div>
                    <MediaCardVideo 
                            title="Making Korail more habitable" 
                            district="District"
                            coutnry="Bangladesh"
                            entity="BRAC"
                            entityUrl="http://www.brac.net/"
                            desc="The non profit CODEC is fighting against water salinity, women inequality, deforestation and more with their Nature and Life project."
                            thumbnailUrl="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850">
                    </MediaCardVideo>
                    <MediaCardVideo 
                            title="Making Korail more habitable" 
                            district="District"
                            coutnry="Bangladesh"
                            entity="BRAC"
                            entityUrl="http://www.brac.net/"
                            desc="The non profit CODEC is fighting against water salinity, women inequality, deforestation and more with their Nature and Life project."
                            thumbnailUrl="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850">
                    </MediaCardVideo>
                </div>
            </div>
        </section>
    </>
  )
}
