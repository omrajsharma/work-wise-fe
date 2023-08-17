import React from 'react'

const JobCreatePage = () => {
  return (
    <div className='create-job'>
        <div className="create-job-container">
            <div className="create-job-form">
                <h1>Post a job</h1>
                <form>
                    <input type="text" placeholder='Job Title' className='input-field' />
                    
                    {/* INDIAN STATES */}
                    <select name="state" id="state" class="form-control" className='input-select'>
                        <option value="" disabled selected>Select a state</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                        <option value="Daman and Diu">Daman and Diu</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Lakshadweep">Lakshadweep</option>
                        <option value="Puducherry">Puducherry</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="West Bengal">West Bengal</option>
                    </select>

                    <select name="mode" id="mode" className='input-select'>
                        <option value="" disabled selected>Select mode</option>
                        <option value="OFFICE">Office</option>
                        <option value="REMOTE">Remote</option>
                        <option value="HYBRID">Hybrid</option>
                    </select>


                    <select name="type" id="type" className='input-select'>
                        <option value="" disabled selected>Select type</option>
                        <option value="FULLTIME">Full Time</option>
                        <option value="PARTTIME">Part Time</option>
                        <option value="INTERNSHIP">Internship</option>
                        <option value="CONTRACT">Contract</option>
                    </select>

                    <select name="role" id="role" className='input-select'>
                        <option value="" disabled selected>Select role</option>
                        <option value="FRONTEND_ENGINEER">Frontend Engineer</option>
                        <option value="BACKEND_ENGINEER">Backend Engineer</option>
                        <option value="FULLSTACK_ENGINEER">Fullstack Engineer</option>
                        <option value="PRODUCT_MANAGER">Product Manager</option>
                    </select>

                    <select name="experience" id="experience" className='input-select'>
                        <option value="" disabled selected>Select Years of Exp</option>
                        <option value=""> less than 1 YOE</option>
                        <option value=""> 1+ YOE</option>
                        <option value=""> 3+ YOE</option>
                        <option value=""> 5+ YOE</option>
                        <option value=""> 7+ YOE</option>
                        <option value=""> 10+ YOE</option>
                    </select>

                    <input type="number" placeholder='Starting salary' className='input-field' />
                    <input type="number" placeholder='Ending salary' className='input-field' />

                    <textarea name="" id="" cols="30" rows="6" className='input-field' placeholder='Job Description...'></textarea>

                    <button>Create Job Listing</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default JobCreatePage
