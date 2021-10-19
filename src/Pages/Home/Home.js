import React from 'react';
import Banner from '../Banner/Banner';
import "./Home.css"


const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <div className="mt-5 mb-5">
            <h1 className="text-info">WHY CHOOSES US_______</h1>
            <div class="row row-cols-1 row-cols-md-4 g-4 choosing-section">
                <div class="col">
                    <div class="card">
                    <h2>8600</h2>
                    <div class="card-body">
                        <h5 class="card-title">Successful Cases</h5>
                        <p class="card-text">
                        “Physicians should be personable, great listeners, and empathetic to the concerns of their patients,” he elaborates. “They should not be condescending or arrogant. They should treat others as they want to be treated.” "Physicians should be personable, great listeners, and empathetic to the concerns of their patients."</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <h2>145</h2>
                    <div class="card-body">
                        <h5 class="card-title">Qualified Doctors</h5>
                        <p class="card-text">A good doctor is also one who is attentive, analytical, brave, calm, cooperative, creative, decisive, energetic, ethical, friendly, gracious, humorous, investigative, knowledgeable, mature, nurturing, observant, passionate, responsible, reassuring, selfless, skillful, trustworthy, vigilant, and wise.</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <h2>25</h2>
                    <div class="card-body">
                        <h5 class="card-title">Year Of Experience</h5>
                        <p class="card-text">In order to become a doctor, a person must first complete a bachelor's degree. Then, he must attend and complete four years of medical school. Medical students rotate through various specialties such as surgery, pediatrics, or neurology to learn about each field so they can decide which is of most interest to them.</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <h2>24x7</h2>
                    <div class="card-body">
                        <h5 class="card-title">Staff Availability</h5>
                        <p class="card-text">Hospital, an institution that is built, staffed, and equipped for the diagnosis of disease; for the treatment, both medical and surgical, of the sick and the injured; and for their housing during this process. The modern hospital also often serves as a centre for investigation and for teaching.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Home;