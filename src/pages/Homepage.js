import React from 'react';
import './style.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Homepage = () => {
    return (
        <div className="page">
            <h1>English Language and Culture Blog</h1>
            <Carousel>
                <div>
                    <img className='pic' src="./home1.jpg" />
                    <p className="legend">“A book is a garden, an orchard, a storehouse, a party, a company by the way, a counselor, a multitude of counselors.”</p>
                </div>
                <div>
                    <img className='pic' src="./home2.jpg" />
                    <p className="legend">“Reading should not be presented to children as a chore, a duty. It should be offered as a gift.”</p>
                </div>
                <div>
                    <img className='pic' src="./home3.jpg" />
                    <p className="legend">“Books are a uniquely portable magic.”</p>
                </div> 
                <div>
                    <img className='pic' src="./home6.jpg" />
                    <p className="legend">“If you don’t like to read, you haven’t found the right book.”</p>
                </div>
                <div>
                    <img className='pic' src="./home4.jpg" />
                    <p className="legend">“Books are mirrors: You only see in them what you already have inside you.”</p>
                </div>
                <div>
                    <img className='pic' src="./home5.jpg" />
                    <p className="legend">“Some books leave us free and some books make us free.”</p>
                </div>
            </Carousel>
            
            <p>
                Have you tried to run a marathon with no practice?

                I hope not. You might pull a muscle.

                You need to start small in order to achieve something big like that.

                When it comes to learning English, what if I told you that you can understand big ideas with just a little bit of text?

                You do not need to wait several years to deal with complex ideas.

                Just because you are learning a language does not mean you need to limit your thinking.

                Stories are all about going beyond reality. It is no wonder that they let you understand big ideas with only a little bit of English reading practice.

                But this works better when you’re reading better stories.
            </p>
            <h2>Why Short Stories Are Best for English Learning?</h2>
            Short stories are amazing resources for any English learner. That’s because:

            <li>You get more time to focus on individual words. When a text is short, you can spend more time learning how every
            single word is used and what importance it has in the piece.</li>
            <li>You can read a whole story in one sitting. Attention spans are very important for learning, and the ability to
            finish a story gives you more time to understand it.</li>
            <li>Short stories are designed to give you maximum information with minimal effort.</li>
            <li>It is best for consistency. It is far easier to read one story every day than trying to read a big novel that never seems to end.
            You can share them easily in a group.</li> 
            <li>Since short stories can be read in a single sitting, they are ideal for book
            clubs and learning circles. Most of the time these groups do not work because members have no time to read. Short
            stories are the perfect solution.</li>

        </div>
    );
};

export default Homepage;