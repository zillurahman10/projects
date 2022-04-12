import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/foodpanda.png'

const Header = () => {
    return (
        <>
            <div className='d-flex justify-content-center' style={{ backgroundColor: 'pink' }}>
                <img style={{ width: '90px', backgroundColor: 'pink' }} src="https://static.vecteezy.com/system/resources/previews/005/294/187/large_2x/suitcase-bag-icon-logo-template-illustration-design-vector.jpg" alt="" />
                <h4 className='mt-3 me-3'>Do you need a business account?</h4>
                <button className='btn mt-2' style={{ border: '2px solid pink', height: '50px' }}>Sigh Up Now</button>
            </div>
            <div className='d-flex justify-content-between mt-2'>
                <div className='ms-5'>
                    <img style={{ width: '100px' }} src={logo} alt="" />
                </div>
                <div className='d-flex me-5'>
                    <p className='me-3'>BN</p>
                    <Link className='me-3' to='/login'>Login</Link>
                    <button className='btn btn-primary' style={{ height: '40px' }}>Cart</button>
                </div>
            </div>
        </>
    );
};

export default Header;