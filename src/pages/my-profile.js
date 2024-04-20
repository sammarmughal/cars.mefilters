import React, { useState, useMemo } from 'react';
import Nav from "../component/nav";
import Footer from "../component/footer";
import Register from "../component/register";
import bilal from "../images/HomepageAssets/bilal.png";
import banner from "../images/HomepageAssets/banner241.png";
import facebook from "../images/HomepageAssets/facebook.png";
import google from "../images/HomepageAssets/google.png";
import { Link } from 'react-router-dom';
function MyProfile() {

    return (
        <>
            <Nav />
                <div className="md:w-[80%] w-[95%] max-w-[1800px]  mx-auto my-10">
                    <div className="flex flex-col gap-4 sm:py-10 sm:my-10">
                        <h1 className="text-blue-800 font-black lg:text-5xl sm:text-3xl text-2xl tracking-wider">My Profile</h1>
                    </div>
                    <div className="flex flex-row my-8 flex items-center">
                        <div >
                            <img src={bilal} alt="avatar" />
                        </div>
                        <div className="ml-8 flex flex-col justify-center h-full">
                            <h1 className="text-blue-800 text-left mb-2 font-bold md:text-3xl text-lg">
                                Profile Photo
                            </h1>
                            <div className="flex gap-2 mt-2">
                                <a className="underline cursor-pointer">Change Avatar</a>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[50%] sm:w-[70%]">
                        <div className="flex mb-5 justify-evenly gap-6 items-center">
                            <label
                                htmlFor="fName"
                                className="w-48 block text-lg text-right whitespace-nowrap font-semibold text-blue-800"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="fName"
                                id="fName"
                                placeholder="First Name"
                                className="form-control w-full max-w-[400px] rounded-lg border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-blue-800 focus:shadow-md"
                            />
                        </div>
                        <div className="flex mb-5 gap-6 justify-evenly items-center">
                            <label
                                htmlFor="gender"
                                className="w-48 block text-lg text-right whitespace-nowrap font-semibold text-blue-800"
                            >
                                Gender
                            </label>
                            <div className='relative w-full bg-white max-w-[400px] rounded-lg border border-[#e0e0e0]'>
                                <select id="gender" name="gender" defaultValue="gender" className="appearance-none w-full max-w-[400px]  bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-[#6A64F1] focus:shadow-md">
                                    <option value="gender" disabled selected hidden>
                                        Gender
                                    </option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Others">Others</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-gray-700">
                                    <svg className="fill-current h-5 w-5 text-blue-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12l-6-6h12l-6 6z" /></svg>
                                </div>
                            </div>
                        </div>
                        <div className="flex mb-5 gap-6 justify-evenly items-center">
                            <label
                                htmlFor="date"
                                className="w-48 block text-lg text-right whitespace-nowrap font-semibold text-blue-800"
                            >
                                Date
                            </label>
                            <input
                                type="date"
                                name="date"
                                id="date"
                                className="form-control w-full max-w-[400px] rounded-lg border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="flex mb-5 gap-6 justify-evenly items-center">
                            <label
                                htmlFor="country"
                                className="w-48 block text-lg text-right whitespace-nowrap font-semibold text-blue-800" >
                                Country
                            </label>
                            <div className='relative w-full bg-white max-w-[400px] rounded-lg border border-[#e0e0e0]'>
                                <select id="country" name="country" className="form-control appearance-none w-full max-w-[400px] bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-[#6A64F1] focus:shadow-md" defaultValue="pakistan">
                                    <option defaultValue="select country">Select Country</option>
                                    <option value="Afghanistan">Afghanistan</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Belgium">Belgium</option>
                                    <option value="Brazil">Brazil</option>
                                    <option value="Canada">Canada</option>
                                    <option value="China">China</option>
                                    <option value="France">France</option>
                                    <option value="Germany">Germany</option>
                                    <option value="Hong Kong">Hong Kong</option>
                                    <option value="Iceland">Iceland</option>
                                    <option value="India">India</option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                                    <option value="Iraq">Iraq</option>
                                    <option value="Ireland">Ireland</option>
                                    <option value="Japan">Japan</option>
                                    <option value="Korea, Republic of">Korea, Republic of</option>
                                    <option value="Kuwait">Kuwait</option>
                                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                                    <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                                    <option value="Latvia">Latvia</option>
                                    <option value="Lebanon">Lebanon</option>
                                    <option value="Lesotho">Lesotho</option>
                                    <option value="Liberia">Liberia</option>
                                    <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                                    <option value="Liechtenstein">Liechtenstein</option>
                                    <option value="Lithuania">Lithuania</option>
                                    <option value="Luxembourg">Luxembourg</option>
                                    <option value="Macao">Macao</option>
                                    <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                                    <option value="Madagascar">Madagascar</option>
                                    <option value="Malawi">Malawi</option>
                                    <option value="Malaysia">Malaysia</option>
                                    <option value="Mexico">Mexico</option>
                                    <option value="Myanmar">Myanmar</option>
                                    <option value="Namibia">Namibia</option>
                                    <option value="Nauru">Nauru</option>
                                    <option value="Nepal">Nepal</option>
                                    <option value="Netherlands">Netherlands</option>
                                    <option value="Netherlands Antilles">Netherlands Antilles</option>
                                    <option value="New Caledonia">New Caledonia</option>
                                    <option value="New Zealand">New Zealand</option>
                                    <option value="Nicaragua">Nicaragua</option>
                                    <option value="Niger">Niger</option>
                                    <option value="Nigeria">Nigeria</option>
                                    <option value="Niue">Niue</option>
                                    <option value="Norfolk Island">Norfolk Island</option>
                                    <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                    <option value="Norway">Norway</option>
                                    <option value="Oman">Oman</option>
                                    <option value="Pakistan">Pakistan</option>
                                    <option value="Palau">Palau</option>
                                    <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                                    <option value="Panama">Panama</option>
                                    <option value="Papua New Guinea">Papua New Guinea</option>
                                    <option value="Paraguay">Paraguay</option>
                                    <option value="Peru">Peru</option>
                                    <option value="Philippines">Philippines</option>
                                    <option value="Pitcairn">Pitcairn</option>
                                    <option value="Poland">Poland</option>
                                    <option value="Portugal">Portugal</option>
                                    <option value="Qatar">Qatar</option>
                                    <option value="Saudi Arabia">Saudi Arabia</option>
                                    <option value="South Africa">South Africa</option>
                                    <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                                    <option value="Spain">Spain</option>
                                    <option value="Sri Lanka">Sri Lanka</option>
                                    <option value="Sweden">Sweden</option>
                                    <option value="Switzerland">Switzerland</option>
                                    <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                                    <option value="Taiwan">Taiwan</option>
                                    <option value="Tajikistan">Tajikistan</option>
                                    <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                                    <option value="Thailand">Thailand</option>
                                    <option value="Timor-leste">Timor-leste</option>
                                    <option value="Togo">Togo</option>
                                    <option value="Tokelau">Tokelau</option>
                                    <option value="Tonga">Tonga</option>
                                    <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                    <option value="Tunisia">Tunisia</option>
                                    <option value="Turkey">Turkey</option>
                                    <option value="Turkmenistan">Turkmenistan</option>
                                    <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                                    <option value="Tuvalu">Tuvalu</option>
                                    <option value="Uganda">Uganda</option>
                                    <option value="Ukraine">Ukraine</option>
                                    <option value="United Arab Emirates">United Arab Emirates</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="United States">United States</option>
                                    <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>

                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-gray-700">
                                    <svg className="fill-current h-5 w-5 text-blue-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12l-6-6h12l-6 6z" /></svg>
                                </div>
                            </div>
                        </div>
                        <div className="flex mb-5 gap-6 justify-evenly items-center">
                            <label
                                htmlFor="location"
                                className="w-48 block text-lg text-right whitespace-nowrap font-semibold text-blue-800"
                            >
                                City
                            </label>
                            <div className='relative w-full bg-white max-w-[400px] rounded-lg border border-[#e0e0e0]'>
                                <select name="location" id="location" defaultValue="" className="appearance-none form-control w-full bg-white p-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-[#6A64F1] focus:shadow-md" required>
                                    <option value="" >Select The City</option>
                                    <option value="Islamabad">Islamabad</option>
                                    <option value="" disabled>Punjab Cities</option>
                                    <option value="Ahmed Nager Chatha">Ahmed Nager Chatha</option>
                                    <option value="Ahmadpur East">Ahmadpur East</option>
                                    <option value="Ali Khan Abad">Ali Khan Abad</option>
                                    <option value="Alipur">Alipur</option>
                                    <option value="Arifwala">Arifwala</option>
                                    <option value="Attock">Attock</option>
                                    <option value="Bhera">Bhera</option>
                                    <option value="Bhalwal">Bhalwal</option>
                                    <option value="Bahawalnagar">Bahawalnagar</option>
                                    <option value="Bahawalpur">Bahawalpur</option>
                                    <option value="Bhakkar">Bhakkar</option>
                                    <option value="Burewala">Burewala</option>
                                    <option value="Chillianwala">Chillianwala</option>
                                    <option value="Chakwal">Chakwal</option>
                                    <option value="Chichawatni">Chichawatni</option>
                                    <option value="Chiniot">Chiniot</option>
                                    <option value="Chishtian">Chishtian</option>
                                    <option value="Daska">Daska</option>
                                    <option value="Darya Khan">Darya Khan</option>
                                    <option value="Dera Ghazi Khan">Dera Ghazi Khan</option>
                                    <option value="Dhaular">Dhaular</option>
                                    <option value="Dina">Dina</option>
                                    <option value="Dinga">Dinga</option>
                                    <option value="Dipalpur">Dipalpur</option>
                                    <option value="Faisalabad">Faisalabad</option>
                                    <option value="Ferozewala">Ferozewala</option>
                                    <option value="Fateh Jhang">Fateh Jang</option>
                                    <option value="Ghakhar Mandi">Ghakhar Mandi</option>
                                    <option value="Gojra">Gojra</option>
                                    <option value="Gujranwala">Gujranwala</option>
                                    <option value="Gujrat">Gujrat</option>
                                    <option value="Gujar Khan">Gujar Khan</option>
                                    <option value="Hafizabad">Hafizabad</option>
                                    <option value="Haroonabad">Haroonabad</option>
                                    <option value="Hasilpur">Hasilpur</option>
                                    <option value="Haveli Lakha">Haveli Lakha</option>
                                    <option value="Jatoi">Jatoi</option>
                                    <option value="Jalalpur">Jalalpur</option>
                                    <option value="Jattan">Jattan</option>
                                    <option value="Jampur">Jampur</option>
                                    <option value="Jaranwala">Jaranwala</option>
                                    <option value="Jhang">Jhang</option>
                                    <option value="Jhelum">Jhelum</option>
                                    <option value="Kalabagh">Kalabagh</option>
                                    <option value="Karor Lal Esan">Karor Lal Esan</option>
                                    <option value="Kasur">Kasur</option>
                                    <option value="Kamalia">Kamalia</option>
                                    <option value="Kamoke">Kamoke</option>
                                    <option value="Khanewal">Khanewal</option>
                                    <option value="Khanpur">Khanpur</option>
                                    <option value="Kharian">Kharian</option>
                                    <option value="Khushab">Khushab</option>
                                    <option value="Kot Addu">Kot Addu</option>
                                    <option value="Jauharabad">Jauharabad</option>
                                    <option value="Lahore">Lahore</option>
                                    <option value="Lalamusa">Lalamusa</option>
                                    <option value="Layyah">Layyah</option>
                                    <option value="Liaquat Pur">Liaquat Pur</option>
                                    <option value="Lodhran">Lodhran</option>
                                    <option value="Malakwal">Malakwal</option>
                                    <option value="Mamoori">Mamoori</option>
                                    <option value="Mailsi">Mailsi</option>
                                    <option value="Mandi Bahauddin">Mandi Bahauddin</option>
                                    <option value="Mian Channu">Mian Channu</option>
                                    <option value="Mianwali">Mianwali</option>
                                    <option value="Multan">Multan</option>
                                    <option value="Murree">Murree</option>
                                    <option value="Muridke">Muridke</option>
                                    <option value="Mianwali Bangla">Mianwali Bangla</option>
                                    <option value="Muzaffargarh">Muzaffargarh</option>
                                    <option value="Narowal">Narowal</option>
                                    <option value="Nankana Sahib">Nankana Sahib</option>
                                    <option value="Okara">Okara</option>
                                    <option value="Renala Khurd">Renala Khurd</option>
                                    <option value="Pakpattan">Pakpattan</option>
                                    <option value="Pattoki">Pattoki</option>
                                    <option value="Pir Mahal">Pir Mahal</option>
                                    <option value="Qaimpur">Qaimpur</option>
                                    <option value="Qila Didar Singh">Qila Didar Singh</option>
                                    <option value="Rabwah">Rabwah</option>
                                    <option value="Raiwind">Raiwind</option>
                                    <option value="Rajanpur">Rajanpur</option>
                                    <option value="Rahim Yar Khan">Rahim Yar Khan</option>
                                    <option value="Rawalpindi">Rawalpindi</option>
                                    <option value="Sadiqabad">Sadiqabad</option>
                                    <option value="Safdarabad">Safdarabad</option>
                                    <option value="Sahiwal">Sahiwal</option>
                                    <option value="Sangla Hill">Sangla Hill</option>
                                    <option value="Sarai Alamgir">Sarai Alamgir</option>
                                    <option value="Sargodha">Sargodha</option>
                                    <option value="Shakargarh">Shakargarh</option>
                                    <option value="Sheikhupura">Sheikhupura</option>
                                    <option value="Sialkot">Sialkot</option>
                                    <option value="Sohawa">Sohawa</option>
                                    <option value="Soianwala">Soianwala</option>
                                    <option value="Siranwali">Siranwali</option>
                                    <option value="Talagang">Talagang</option>
                                    <option value="Taxila">Taxila</option>
                                    <option value="Toba Tek Singh">Toba Tek Singh</option>
                                    <option value="Vehari">Vehari</option>
                                    <option value="Wah Cantonment">Wah Cantonment</option>
                                    <option value="Wazirabad">Wazirabad</option>
                                    <option value="" disabled>Sindh Cities</option>
                                    <option value="Badin">Badin</option>
                                    <option value="Bhirkan">Bhirkan</option>
                                    <option value="Rajo Khanani">Rajo Khanani</option>
                                    <option value="Chak">Chak</option>
                                    <option value="Dadu">Dadu</option>
                                    <option value="Digri">Digri</option>
                                    <option value="Diplo">Diplo</option>
                                    <option value="Dokri">Dokri</option>
                                    <option value="Ghotki">Ghotki</option>
                                    <option value="Haala">Haala</option>
                                    <option value="Hyderabad">Hyderabad</option>
                                    <option value="Islamkot">Islamkot</option>
                                    <option value="Jacobabad">Jacobabad</option>
                                    <option value="Jamshoro">Jamshoro</option>
                                    <option value="Jungshahi">Jungshahi</option>
                                    <option value="Kandhkot">Kandhkot</option>
                                    <option value="Kandiaro">Kandiaro</option>
                                    <option value="Karachi">Karachi</option>
                                    <option value="Kashmore">Kashmore</option>
                                    <option value="Keti Bandar">Keti Bandar</option>
                                    <option value="Khairpur">Khairpur</option>
                                    <option value="Kotri">Kotri</option>
                                    <option value="Larkana">Larkana</option>
                                    <option value="Matiari">Matiari</option>
                                    <option value="Mehar">Mehar</option>
                                    <option value="Mirpur Khas">Mirpur Khas</option>
                                    <option value="Mithani">Mithani</option>
                                    <option value="Mithi">Mithi</option>
                                    <option value="Mehrabpur">Mehrabpur</option>
                                    <option value="Moro">Moro</option>
                                    <option value="Nagarparkar">Nagarparkar</option>
                                    <option value="Naudero">Naudero</option>
                                    <option value="Naushahro Feroze">Naushahro Feroze</option>
                                    <option value="Naushara">Naushara</option>
                                    <option value="Nawabshah">Nawabshah</option>
                                    <option value="Nazimabad">Nazimabad</option>
                                    <option value="Qambar">Qambar</option>
                                    <option value="Qasimabad">Qasimabad</option>
                                    <option value="Ranipur">Ranipur</option>
                                    <option value="Ratodero">Ratodero</option>
                                    <option value="Rohri">Rohri</option>
                                    <option value="Sakrand">Sakrand</option>
                                    <option value="Sanghar">Sanghar</option>
                                    <option value="Shahbandar">Shahbandar</option>
                                    <option value="Shahdadkot">Shahdadkot</option>
                                    <option value="Shahdadpur">Shahdadpur</option>
                                    <option value="Shahpur Chakar">Shahpur Chakar</option>
                                    <option value="Shikarpaur">Shikarpaur</option>
                                    <option value="Sukkur">Sukkur</option>
                                    <option value="Tangwani">Tangwani</option>
                                    <option value="Tando Adam Khan">Tando Adam Khan</option>
                                    <option value="Tando Allahyar">Tando Allahyar</option>
                                    <option value="Tando Muhammad Khan">Tando Muhammad Khan</option>
                                    <option value="Thatta">Thatta</option>
                                    <option value="Umerkot">Umerkot</option>
                                    <option value="Warah">Warah</option>
                                    <option value="" disabled>Khyber Cities</option>
                                    <option value="Abbottabad">Abbottabad</option>
                                    <option value="Adezai">Adezai</option>
                                    <option value="Alpuri">Alpuri</option>
                                    <option value="Akora Khattak">Akora Khattak</option>
                                    <option value="Ayubia">Ayubia</option>
                                    <option value="Banda Daud Shah">Banda Daud Shah</option>
                                    <option value="Bannu">Bannu</option>
                                    <option value="Batkhela">Batkhela</option>
                                    <option value="Battagram">Battagram</option>
                                    <option value="Birote">Birote</option>
                                    <option value="Chakdara">Chakdara</option>
                                    <option value="Charsadda">Charsadda</option>
                                    <option value="Chitral">Chitral</option>
                                    <option value="Daggar">Daggar</option>
                                    <option value="Dargai">Dargai</option>
                                    <option value="Darya Khan">Darya Khan</option>
                                    <option value="Dera Ismail Khan">Dera Ismail Khan</option>
                                    <option value="Doaba">Doaba</option>
                                    <option value="Dir">Dir</option>
                                    <option value="Drosh">Drosh</option>
                                    <option value="Hangu">Hangu</option>
                                    <option value="Haripur">Haripur</option>
                                    <option value="Karak">Karak</option>
                                    <option value="Kohat">Kohat</option>
                                    <option value="Kulachi">Kulachi</option>
                                    <option value="Lakki Marwat">Lakki Marwat</option>
                                    <option value="Latamber">Latamber</option>
                                    <option value="Madyan">Madyan</option>
                                    <option value="Mansehra">Mansehra</option>
                                    <option value="Mardan">Mardan</option>
                                    <option value="Mastuj">Mastuj</option>
                                    <option value="Mingora">Mingora</option>
                                    <option value="Nowshera">Nowshera</option>
                                    <option value="Paharpur">Paharpur</option>
                                    <option value="Pabbi">Pabbi</option>
                                    <option value="Peshawar">Peshawar</option>
                                    <option value="Saidu Sharif">Saidu Sharif</option>
                                    <option value="Shorkot">Shorkot</option>
                                    <option value="Shewa Adda">Shewa Adda</option>
                                    <option value="Swabi">Swabi</option>
                                    <option value="Swat">Swat</option>
                                    <option value="Tangi">Tangi</option>
                                    <option value="Tank">Tank</option>
                                    <option value="Thall">Thall</option>
                                    <option value="Timergara">Timergara</option>
                                    <option value="Tordher">Tordher</option>
                                    <option value="" disabled>Balochistan Cities</option>
                                    <option value="Awaran">Awaran</option>
                                    <option value="Barkhan">Barkhan</option>
                                    <option value="Chagai">Chagai</option>
                                    <option value="Dera Bugti">Dera Bugti</option>
                                    <option value="Gwadar">Gwadar</option>
                                    <option value="Harnai">Harnai</option>
                                    <option value="Jafarabad">Jafarabad</option>
                                    <option value="Jhal Magsi">Jhal Magsi</option>
                                    <option value="Kacchi">Kacchi</option>
                                    <option value="Kalat">Kalat</option>
                                    <option value="Kech">Kech</option>
                                    <option value="Kharan">Kharan</option>
                                    <option value="Khuzdar">Khuzdar</option>
                                    <option value="Killa Abdullah">Killa Abdullah</option>
                                    <option value="Killa Saifullah">Killa Saifullah</option>
                                    <option value="Kohlu">Kohlu</option>
                                    <option value="Lasbela">Lasbela</option>
                                    <option value="Lehri">Lehri</option>
                                    <option value="Loralai">Loralai</option>
                                    <option value="Mastung">Mastung</option>
                                    <option value="Musakhel">Musakhel</option>
                                    <option value="Nasirabad">Nasirabad</option>
                                    <option value="Nushki">Nushki</option>
                                    <option value="Panjgur">Panjgur</option>
                                    <option value="Pishin Valley">Pishin Valley</option>
                                    <option value="Quetta">Quetta</option>
                                    <option value="Sherani">Sherani</option>
                                    <option value="Sibi">Sibi</option>
                                    <option value="Sohbatpur">Sohbatpur</option>
                                    <option value="Washuk">Washuk</option>
                                    <option value="Zhob">Zhob</option>
                                    <option value="Ziarat">Ziarat</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-gray-700">
                                    <svg className="fill-current h-5 w-5 text-blue-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12l-6-6h12l-6 6z" /></svg>
                                </div>
                            </div>
                        </div>
                        <div className="flex mb-5 justify-evenly gap-6 items-center">
                            <label
                                htmlFor="userName"
                                className="w-48 block text-lg text-right whitespace-nowrap font-semibold text-blue-800"
                            >
                                Username
                            </label>
                            <input
                                type="text"
                                name="userName"
                                id="userName"
                                placeholder="Username"
                                className="form-control w-full max-w-[400px] rounded-lg border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-blue-600 focus:shadow-md"
                            />
                        </div>
                        <div className="flex mb-5 justify-evenly gap-6 items-center">
                            <label
                                htmlFor="e-mail"
                                className="w-48 block text-lg text-right whitespace-nowrap font-semibold text-blue-800"
                            >
                                E-Mail
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="e-mail"
                                placeholder="Email Address"
                                className="form-control w-full max-w-[400px] rounded-lg border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-blue-600 focus:shadow-md"
                            />
                        </div>
                        <div className="flex mb-5 justify-evenly gap-6 items-center">
                            <label
                                htmlFor="phone"
                                className="w-48 block text-lg text-right whitespace-nowrap font-semibold text-blue-800"
                            >
                                Mobile Number
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                placeholder="Mobile Number"
                                className="form-control w-full max-w-[400px] rounded-lg border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-blue-600 focus:shadow-md"
                            />
                        </div>
                        <div className="flex justify-end">
                            <button className="save-btn"> Save Record</button>
                        </div>
                        <div className='flex sm:flex-row flex-col my-5 sm:justify-evenly gap-6'>
                            <div className='mt-6'>
                                <label
                                    className="lg:w-48 sm:w-40 block text-lg sm:text-right  whitespace-nowrap font-semibold text-blue-800">
                                    Linked Accounts</label>
                            </div>
                            <div className='w-full'>
                                <Link
                                    to="/"
                                    className="md:min-w-[390px] max-w-[450px] flex sm:justify-center form-control rounded-lg block w-full my-3 p-3 text-base font-normal leading-6 text-gray-800  border border-blue-800  transition duration-150 ease-in-out"
                                >
                                    <div className="w-full flex items-center">
                                        <img src={facebook} className="h-8 w-8 ml-8" />
                                        <p className="text-blue-800 font-semibold text-nowrap text-lg md:ml-10 ml-6">
                                            Continue With Facebook
                                        </p>
                                    </div>
                                </Link>
                                <Link
                                    to="/"
                                    className="md:min-w-[390px] max-w-[450px] flex gap-8 sm:justify-center form-control rounded-lg block w-full my-3 p-3 text-base font-normal leading-6 text-gray-800  border border-blue-800  transition duration-150 ease-in-out"
                                >
                                    <div className="w-full flex  items-center">
                                        <img src={google} className="h-8 w-8 ml-8" />
                                        <p className="text-blue-800 font-semibold text-nowrap text-lg md:ml-10 ml-6">
                                            Continue With Google
                                        </p>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>               

                </div>
            <Register />
            <div className="flex w-[90%] mx-auto justify-center py-5 my-5">
                <img src={banner} />
            </div>
            <Footer />
        </>
    )
}
export default MyProfile;