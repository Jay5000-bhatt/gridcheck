import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-3">
          <div class="card">
            <div class="card-body box1">
              <h5 class="card-title">Waze for Cities</h5>
              <p class="card-text">Let's work together to improve traffic and safety in your city.</p>
              <a href="#" class="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-3">
          <div class="card">
            <div class="card-body box2">
              <h5 class="card-title">Product Partners</h5>
              <p class="card-text">Pair Waze with your audio service, transportation app, car, or product.</p>
              <a href="#" class="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-3">
          <div class="card">
            <div class="card-body box3">
              <h5 class="card-title">Advertisers</h5>
              <p class="card-text">Reach customers when they're driving by or searching for businesses like yours.</p>
              <a href="#" class="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-3">
          <div class="card">
            <div class="card-body box4">
              <h5 class="card-title">Carpool Partners</h5>
              <p class="card-text">Upgrade the way your team gets to work with Waze Carpool.</p>
              <a href="#" class="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
