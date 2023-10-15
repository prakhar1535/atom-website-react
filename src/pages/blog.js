import React from "react";
import Cards from "../components/Cards";

const Blog = () =>{
return(
    <div style={styles.pin_container}>
        <Cards size='small' imgSrc='/assets/hackathons/urbanizeAway.png' heading='Urbanize Away'
        overlayContent={<div style={{display: 'flex', flexFlow: 'column'}}>
            <h1 style={{fontSize: '2.5rem' , fontWeight: '900', margin:'1.25rem' , color: 'white'}}>URBANIZE AWAY 1ST PRIZE</h1>
            <p style={{fontSize: '1.25rem' , margin: '1.25rem', fontWeight: '600'}}>
                For Achieving 1st Position in URBANIZE AWAY  organised by hackerearth and winning a whopping cash prize of 
                Rs 40,500 (500 USD) to the winning 
                team Atom 
            </p>
            <h1 style={{fontSize: '2.5rem' , fontWeight: '900', margin:'1.25rem' , color: 'white'}}>Team Members</h1>
            <ul style={{fontSize: '1.25rem', margin: '1rem', fontWeight: '600', listStyle: 'numbered'}}>
               <li>Hriday Aggarwal</li>
               <li>Divyansh Sharma</li>
               <li>Jayesh Chaudhary</li>
               <li>Akshaya</li>

            </ul>
            <center><div style={{width: '80%' ,margin: '1rem'}}>
            <img
                src='/assets/hackathons/urbanizeAway.png'
                alt="Card"
                style={{ width: '100%', height: '100%', borderRadius: '16px', objectFit: 'cover ' , border: '2px solid white'}}
            />
            </div></center>

        </div>}/>
        <Cards size='medium' imgSrc='/assets/hackathons/uhacks.png' 
                overlayContent={<div style={{display: 'flex', flexFlow: 'column'}}>
                <h1 style={{fontSize: '2.5rem' , fontWeight: '900', margin:'1.25rem' , color: 'white'}}>UHACKS 5.0 2ND PRIZE</h1>
                <p style={{fontSize: '1.25rem' , margin: '1.25rem', fontWeight: '600'}}>
                For Achieving 2nd Position in UHACKS 5.0 organised by USICT and winning a whopping cash prize of Rs 25,000 to the winning Team Access Denied.
                </p>
                <h1 style={{fontSize: '2.5rem' , fontWeight: '900', margin:'1.25rem' , color: 'white'}}>Team Members</h1>
                <ul style={{fontSize: '1.25rem', margin: '1rem', fontWeight: '600', listStyle: 'numbered'}}>
                   <li>Manan Gupta</li>
                   <li>Pratyaksh Singhla</li>
                   <li>Krish Jindal</li>
                </ul>
                <center><div style={{width: '80%' ,margin: '1rem'}}>
                <img
                    src='/assets/hackathons/uhacks.png'
                    alt="Card"
                    style={{ width: '100%', height: '100%', borderRadius: '16px', objectFit: 'cover ' , border: '2px solid white'}}
                />
                </div></center>
    
            </div>}/>
        
        <Cards size='large' imgSrc='/assets/hackathons/leaninhacks.png' 
         overlayContent={<div style={{display: 'flex', flexFlow: 'column'}}>
         <h1 style={{fontSize: '2.5rem' , fontWeight: '900', margin:'1.25rem' , color: 'white'}}>LeanInHacks 4.0 1ST PRIZE</h1>
         <p style={{fontSize: '1.25rem' , margin: '1.25rem', fontWeight: '600'}}>
         For Achieving 1st Position in LeanInHacks4.0 organised by IGDTUW and winning a cash prize of Rs 15,000 to the Team TINKERERS held from 11 Feb to 13 Feb 2023           </p>
         <h1 style={{fontSize: '2.5rem' , fontWeight: '900', margin:'1.25rem' , color: 'white'}}>Team Members</h1>
         <ul style={{fontSize: '1.25rem', margin: '1rem', fontWeight: '600', listStyle: 'numbered'}}>
            <li>SHLOK SHARMA</li>
            <li>GAURI MADAN</li>
         </ul>
         <center><div style={{width: '80%' ,margin: '1rem'}}>
         <img
             src='/assets/hackathons/leaninhacks.png'
             alt="Card"
             style={{ width: '100%', height: '100%', borderRadius: '16px', objectFit: 'cover ' , border: '2px solid white'}}
         />
         </div></center>
 
     </div>}
        />
        
        
        <Cards size='small' imgSrc='/assets/hackathons/reign.png' 
        overlayContent={<div style={{display: 'flex', flexFlow: 'column'}}>
        <h1 style={{fontSize: '2.5rem' , fontWeight: '900', margin:'1.25rem' , color: 'white'}}>REIGN '23 3RD PRIZE</h1>
        <p style={{fontSize: '1.25rem' , margin: '1.25rem', fontWeight: '600'}}>
        For Achieving 3rd Position in REIGN'23 organised by Indira Gandhi technical university for Women        </p>
        <h1 style={{fontSize: '2.5rem' , fontWeight: '900', margin:'1.25rem' , color: 'white'}}>Team Members</h1>
        <ul style={{fontSize: '1.25rem', margin: '1rem', fontWeight: '600', listStyle: 'numbered'}}>
           <li>ARJUN K</li>
           <li>JASMEET SINGH</li>
           <li>NAMAN MALIK</li>
        </ul>
        <center><div style={{width: '80%' ,margin: '1rem'}}>
        <img
            src='/assets/hackathons/reign.png'
            alt="Card"
            style={{ width: '100%', height: '100%', borderRadius: '16px', objectFit: 'cover ' , border: '2px solid white'}}
        />
        </div></center>

    </div>}s
        />
         <Cards size='medium' imgSrc='/assets/about_us.png' 
         overlayContent={<div style={{display: 'flex', flexFlow: 'column'}}>
         <h1 style={{fontSize: '2.5rem' , fontWeight: '900', margin:'1.25rem' , color: 'white'}}>A.T.O.M OREINTATION</h1>
         <p style={{fontSize: '1.25rem' , margin: '1.25rem', fontWeight: '600'}}>
Tremendous session of OREINTATION organised by A.T.O.M robotics lab for freshers .                 </p>
         <h1 style={{fontSize: '2.5rem' , fontWeight: '900', margin:'1.25rem' , color: 'white'}}>Team Members</h1>
         <ul style={{fontSize: '1.25rem', margin: '1rem', fontWeight: '600', listStyle: 'numbered'}}>
            <li>A.T.O.M MEMBERS</li>
              </ul>
         <center><div style={{width: '80%' ,margin: '1rem'}}>
         <img
             src='/assets/about_us.png'
             alt="Card"
             style={{ width: '100%', height: '100%', borderRadius: '16px', objectFit: 'cover ' , border: '2px solid white'}}
         />
         </div></center>
 
     </div>}
        />
       
        <Cards size='large' imgSrc='/assets/hackathons/vihaan.png' 
         overlayContent={<div style={{display: 'flex', flexFlow: 'column'}}>
         <h1 style={{fontSize: '2.5rem' , fontWeight: '900', margin:'1.25rem' , color: 'white'}}>VIHAAN 6.0 1ST RPIZE</h1>
         <p style={{fontSize: '1.25rem' , margin: '1.25rem', fontWeight: '600'}}>
         For Achieving 1st Position at VIHAAN 6.0 AT DTU and winning Cash prize of Rs. 40,000 in ASIA'S LARGEST HACKATHON held on 24th-25th April 2023       
           </p>
         <h1 style={{fontSize: '2.5rem' , fontWeight: '900', margin:'1.25rem' , color: 'white'}}>Team Members</h1>
         <ul style={{fontSize: '1.25rem', margin: '1rem', fontWeight: '600', listStyle: 'numbered'}}>
            <li>PRAKHAR SHARMA</li>
            <li>SHLOK SHARMA</li>
            <li>KARTIK SHARMA</li>
            <li>PREET YADAV</li>
         </ul>
         <center><div style={{width: '80%' ,margin: '1rem'}}>
         <img
             src='/assets/hackathons/vihaan.png'
             alt="Card"
             style={{ width: '100%', height: '100%', borderRadius: '16px', objectFit: 'cover ' , border: '2px solid white'}}
         />
         </div></center>
 
     </div>}
        />
        <Cards size='small' imgSrc='/assets/hackathons/innovatex.png' 
         overlayContent={<div style={{display: 'flex', flexFlow: 'column'}}>
         <h1 style={{fontSize: '2.5rem' , fontWeight: '900', margin:'1.25rem' , color: 'white'}}>INNOVATE X 1ST RPIZE</h1>
         <p style={{fontSize: '1.25rem' , margin: '1.25rem', fontWeight: '600'}}>
         For Achieving 1st Position at InnovateX  AT NSUT in Security theme of ASIA'S LARGEST HACKATHON held on 20th-21th May 2023
        </p>
         <h1 style={{fontSize: '2.5rem' , fontWeight: '900', margin:'1.25rem' , color: 'white'}}>Team Members</h1>
         <ul style={{fontSize: '1.25rem', margin: '1rem', fontWeight: '600', listStyle: 'numbered'}}>
            <li>PRAKHAR SHARMA</li>
            <li>SHLOK SHARMA</li>
            <li>KARTIK SHARMA</li>
            <li>PREET YADAV</li>
         </ul>
         <center><div style={{width: '80%' ,margin: '1rem'}}>
         <img
             src='/assets/hackathons/innovatex.png'
             alt="Card"
             style={{ width: '100%', height: '100%', borderRadius: '16px', objectFit: 'cover ' , border: '2px solid white'}}
         />
         </div></center>
 
     </div>}
        />
        <Cards size='medium' imgSrc='/assets/hackathons/techweek.png' 
         overlayContent={<div style={{display: 'flex', flexFlow: 'column'}}>
         <h1 style={{fontSize: '2.5rem' , fontWeight: '900', margin:'1.25rem' , color: 'white'}}>TECHWEEK NSUT 1ST PRIZE</h1>
         <p style={{fontSize: '1.25rem' , margin: '1.25rem', fontWeight: '600'}}>
        For Achieving 1st Position at Techweek 2k23 
        Hackathon at NSUT and winning cash and prizes worth Rs. 50,000 and also getting microsoft exclusive merchandise to Team Brain Byte held on 8th February 2023        
           </p>
         <h1 style={{fontSize: '2.5rem' , fontWeight: '900', margin:'1.25rem' , color: 'white'}}>Team Members</h1>
         <ul style={{fontSize: '1.25rem', margin: '1rem', fontWeight: '600', listStyle: 'numbered'}}>
            <li>PRAKHAR SHARMA</li>
            <li>SAKSHAM KUMAR</li>
            <li>GAGAN KALRA</li>
            <li>PRANAV ARORA</li>
         </ul>
         <center><div style={{width: '80%' ,margin: '1rem'}}>
         <img
             src='/assets/hackathons/techweek.png'
             alt="Card"
             style={{ width: '100%', height: '100%', borderRadius: '16px', objectFit: 'cover ' , border: '2px solid white'}}
         />
         </div></center>
 
     </div>}
        />
        <Cards size='large' imgSrc='/assets/hackathons/code4cause.png' 
        overlayContent={<div style={{display: 'flex', flexFlow: 'column'}}>
        <h1 style={{fontSize: '2.5rem' , fontWeight: '900', margin:'1.25rem' , color: 'white'}}>CODE4CAUSE 1ST PRIZE</h1>
        <p style={{fontSize: '1.25rem' , margin: '1.25rem', fontWeight: '600'}}>
        For Achieving 1st Position at Code4Cause in Edtech theme and  Open Innovation of MSIT held on 5th-6th October 2023                </p>
        <h1 style={{fontSize: '2.5rem' , fontWeight: '900', margin:'1.25rem' , color: 'white'}}>Team Members</h1>
        <ul style={{fontSize: '1.25rem', margin: '1rem', fontWeight: '600', listStyle: 'numbered'}}>
           <li>PRAKHAR SHARMA</li>
           <li>SAKSHAM KUMAR</li>

        </ul>
        <center><div style={{width: '80%' ,margin: '1rem'}}>
        <img
            src='/assets/hackathons/code4cause.png'
            alt="Card"
            style={{ width: '100%', height: '100%', borderRadius: '16px', objectFit: 'cover ' , border: '2px solid white'}}
        />
        </div></center>

    </div>}
        />
        <Cards size='small' imgSrc='/assets/hackathons/hackbvicam5.png' 
        overlayContent={<div style={{display: 'flex', flexFlow: 'column'}}>
        <h1 style={{fontSize: '2.5rem' , fontWeight: '900', margin:'1.25rem' , color: 'white'}}>HACK-BVICAM 1ST PRIZE</h1>
        <p style={{fontSize: '1.25rem' , margin: '1.25rem', fontWeight: '600'}}>
        For Achieving 5th Position in HACK-BVICAM organised by BVP and winning goodies worth Rs 10000 to the Team GALAT FAMILY          </p>
        <h1 style={{fontSize: '2.5rem' , fontWeight: '900', margin:'1.25rem' , color: 'white'}}>Team Members</h1>
        <ul style={{fontSize: '1.25rem', margin: '1rem', fontWeight: '600', listStyle: 'numbered'}}>
           <li>JASMEET SINGH</li>
           <li>KARTIK RANA</li>
           <li>SEHAJ</li>
           <li>MANAN </li>

        </ul>
        <center><div style={{width: '80%' ,margin: '1rem'}}>
        <img
            src='/assets/hackathons/hackbvicam5.png'
            alt="Card"
            style={{ width: '100%', height: '100%', borderRadius: '16px', objectFit: 'cover ' , border: '2px solid white'}}
        />
        </div></center>

    </div>}
        />
        <Cards size='medium' imgSrc='/assets/hackathons/hackbvicam2.png' 
            overlayContent={<div style={{display: 'flex', flexFlow: 'column'}}>
            <h1 style={{fontSize: '2.5rem' , fontWeight: '900', margin:'1.25rem' , color: 'white'}}>HACK-BVICAM 2ND PRIZE</h1>
            <p style={{fontSize: '1.25rem' , margin: '1.25rem', fontWeight: '600'}}>
            For Achieving 2ND Position in HACK-BVICAM organised by BVPIEEE at Bharati Vidyapeeth College of Engineering
               </p>
            <h1 style={{fontSize: '2.5rem' , fontWeight: '900', margin:'1.25rem' , color: 'white'}}>Team Members</h1>
            <ul style={{fontSize: '1.25rem', margin: '1rem', fontWeight: '600', listStyle: 'numbered'}}>
               <li>MANAV SETHI</li>
               <li>DIVYANSH SHARMA</li>
    
            </ul>
            <center><div style={{width: '80%' ,margin: '1rem'}}>
            <img
                src='/assets/hackathons/hackbvicam2.png'
                alt="Card"
                style={{ width: '100%', height: '100%', borderRadius: '16px', objectFit: 'cover ' , border: '2px solid white'}}
            />
            </div></center>
    
        </div>}
        
        />
        <Cards size='large' imgSrc='/assets/hackathons/hackbvicam1.png' 
          overlayContent={<div style={{display: 'flex', flexFlow: 'column'}}>
          <h1 style={{fontSize: '2.5rem' , fontWeight: '900', margin:'1.25rem' , color: 'white'}}>HACK-BVICAM 1ST PRIZE</h1>
          <p style={{fontSize: '1.25rem' , margin: '1.25rem', fontWeight: '600'}}>
          For Achieving 1st Position in HACK-BVICAM organised by BVP  and winning a whopping cash prize of Rs 10000 to the winning Team RUNTIME_ERROR             </p>
          <h1 style={{fontSize: '2.5rem' , fontWeight: '900', margin:'1.25rem' , color: 'white'}}>Team Members</h1>
          <ul style={{fontSize: '1.25rem', margin: '1rem', fontWeight: '600', listStyle: 'numbered'}}>
             <li>ARJUN HARIDAS</li>
             <li>NAMAN MALIK</li>
  
          </ul>
          <center><div style={{width: '80%' ,margin: '1rem'}}>
          <img
              src='/assets/hackathons/hackbvicam1.png'
              alt="Card"
              style={{ width: '100%', height: '100%', borderRadius: '16px', objectFit: 'cover ' , border: '2px solid white'}}
          />
          </div></center>
  
      </div>}
        />
        <Cards size='small' imgSrc='/assets/hackathons/hacknsut.png' 
          overlayContent={<div style={{display: 'flex', flexFlow: 'column'}}>
          <h1 style={{fontSize: '2.5rem' , fontWeight: '900', margin:'1.25rem' , color: 'white'}}>HACK-NSUT 1ST PRIZE</h1>
          <p style={{fontSize: '1.25rem' , margin: '1.25rem', fontWeight: '600'}}>
          For Receiving a special mention in HACKNSUT organised by NSUT  to the winning Team A.T.O.M           </p>
          <h1 style={{fontSize: '2.5rem' , fontWeight: '900', margin:'1.25rem' , color: 'white'}}>Team Members</h1>
          <ul style={{fontSize: '1.25rem', margin: '1rem', fontWeight: '600', listStyle: 'numbered'}}>
             <li>ARJUN HARIDAS</li>
             <li>NAMAN MALIK</li>
             <li>JAYESH CHAUDARY</li>
             <li>DIVYANSH SHARMA</li>

          </ul>
          <center><div style={{width: '80%' ,margin: '1rem'}}>
          <img
              src='/assets/hackathons/hacknsut.png'
              alt="Card"
              style={{ width: '100%', height: '100%', borderRadius: '16px', objectFit: 'cover ' , border: '2px solid white'}}
          />
          </div></center>
  
      </div>}
        />
        <Cards size='small' imgSrc='/assets/hackathons/plan2hack.png' 
          overlayContent={<div style={{display: 'flex', flexFlow: 'column'}}>
          <h1 style={{fontSize: '2.5rem' , fontWeight: '900', margin:'1.25rem' , color: 'white'}}>PLAN2HACK 3RD PRIZE</h1>
          <p style={{fontSize: '1.25rem' , margin: '1.25rem', fontWeight: '600'}}>
          For Achieving 3rd Position in PLAN2HACK organised by BVPIEEE at Bharati Vidyapeeth College of Engineering            </p>
          <h1 style={{fontSize: '2.5rem' , fontWeight: '900', margin:'1.25rem' , color: 'white'}}>Team Members</h1>
          <ul style={{fontSize: '1.25rem', margin: '1rem', fontWeight: '600', listStyle: 'numbered'}}>
             <li>HRIDAY AGGARWAL</li>
             <li>DIVYANSH SHARMA</li>
             <li>RITU SINGH</li>
             <li>RAGHAV GUPTA</li>

          </ul>
          <center><div style={{width: '80%' ,margin: '1rem'}}>
          <img
              src='/assets/hackathons/plan2hack.png'
              alt="Card"
              style={{ width: '100%', height: '100%', borderRadius: '16px', objectFit: 'cover ' , border: '2px solid white'}}
          />
          </div></center>
  
      </div>}
        />

 </div>
)
}

const styles = {
    pin_container: {
    margin: 0,
    zIndex: -1  ,
    padding: 0,
    width: '80vw',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 400px)',
    gridAutoRows: '10px',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    justifyContent: 'center',

    }
   }

export default Blog
