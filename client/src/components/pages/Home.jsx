import React from 'react';
import sHome from '../styles-modules/Home.module.css';


const Home = () => {
    return (
        <div className={sHome.container}>
            <article>
                <h3>Black Tree eBook</h3>
                <h4>What we are?</h4><p>We are a eBook store that you can find any book you need quikly and free.</p>
                <img src='https://notionpress.com/blog/wp-content/uploads/2017/09/free-ebook-image-770x513.jpg' alt='eBook'></img>
            </article>
        </div>
    );
}

export default Home;