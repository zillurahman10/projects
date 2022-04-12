import React from 'react';

const Home = () => {
    return (
        <div style={{ marginTop: '100px' }}>
            <h1 className='ms-5'>It's the food and groceries you love, delivered</h1>
            <div className='d-flex ms-5 mt-5 shadow-lg p-5' style={{ width: '900px' }}>
                <input style={{ width: '500px', height: '50px', fontSize: '20px' }} className="me-3 rounded-3" type="text" placeholder='Enter your full address' />
                <button className='me-3 btn btn-primary'>Delivery</button>
                <p className='me-3 align-items-center' >or</p>
                <button className='btn btn-primary'>Pick Up</button>
            </div>
        </div>
    );
};

export default Home;