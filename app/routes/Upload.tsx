
import { useState, type FormEvent } from 'react';

import Navbar from '../components/Navbar'
import type { H } from 'node_modules/react-router/dist/development/route-data-CqEmXQub.mjs';

const Upload = () => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [statusText, setStatusText] = useState('');
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {}
  return (
   <main className="bg-[url('images/bg-main.svg')] bg-cover ">
    <Navbar />
    <section className="main-section">
        <div className="page-heading py-16  ">
            <h1>Smart feedback for your dream job</h1>
            {isProcessing ? (
                <>
                <h2>{statusText}</h2>
                <img src='/images/resume-scan.gif' className='w-full' />
                </>
            ) : (
                <h2>Drop your for an ATS score and imporvement tips</h2>
            )}
            {!isProcessing &&(
                <form id='upload-form'onSubmit={handleSubmit} className='flex flex-col gap-4 mt-8'>
                   <div className='form-div'>
                    <label htmlFor='company-name'>Company Name</label>
                    <input type='text' id='company-name' name='company-name'placeholder='Enter Company Name'  />
                   </div>
                   <div className='form-div'>
                    <label htmlFor='job-title'>Job Title</label>
                    <input type='text' id='job-title' name='job-title'placeholder='Enter Job Title'  />
                   </div>
                   <div className='form-div'>
                    <label htmlFor='job-description'>Job description</label>
                    <textarea rows={5} id='job-description' name='job-description'placeholder='Enter Job description'  />
                   </div>
                   <div className='form-div'>
                    <label htmlFor='uploader'>Upload Resume</label>
                   <div>
                    Uploader
                   </div>
                   </div>
                   <button className='primary-button' type='submit'>
                    Analyze Resume
                   </button>

                </form>
            )}
        </div>
        </section>
   </main>
  )
}

export default Upload