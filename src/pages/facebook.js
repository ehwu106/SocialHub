import React, {useState, useEffect} from 'react';
import './facebook.css';
import renderCharts from './renderCharts';

const Facebook = (props) => {
  const [userState, setUserState] = useState(null);
  const [userToken, setUserToken] = useState(null);
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    if (userState) {
      fbGetPages();
    }
  }, [userToken])
  
  /*function getLogin() {
    if (window.FB) {
      window.FB.getLoginStatus(function (r) {
        if (r.status === 'connected') {
          setUserToken(r.authResponse.accessToken);
          setUserState(r.authResponse);
          alert(`Hi ${r.authResponse.userID}`);
        } else {
          alert("You must login first.");
        }
      })
    }
  }*/
  function fblogin() {
    if (window.FB) {
      window.FB.login(function(response) {
        if (response.authResponse) {
        console.log('Welcome!  Fetching your information.... ');
        window.FB.api('/me', function(response) {
          console.log('login response');
          console.log(response);
          setUserState(response);
          fbToken();
        });
        } else {
        console.log('User cancelled login or did not fully authorize.');
        }
      }, {scope: 'public_profile, email, pages_show_list', return_scopes: true});
    } else {
      console.log("window.FB undef");
    }
  }
  function fbToken() {
    if (window.FB) {
      window.FB.getLoginStatus(function (r) {
        if (r.status === 'connected') {
          console.log(r);
          setUserToken(r.authResponse.accessToken)
        }
      })
    }
  }

  function fbGetPages() {
    if (window.FB) {
      window.FB.api(`/${userState.id}/accounts`,'get',{access_token: userToken}, function (response) {
        console.log(response);
        countFbFollowers(response.data)
        return response.data;
      })
    }
  }

  function countFbFollowers(pageIds) {
    if (window.FB) {
      let followers = [];
      let views = [];
      let likes = [];
      let pageNames = [];
      pageIds.forEach((page) => {
        window.FB.api(`/${page.id}/`,'get',{access_token: page.access_token, fields: 'followers_count,fan_count,new_like_count,rating_count,talking_about_count,were_here_count'}, function (response) {
          //console.log(response);
          let newData = {...pageData};
          followers.push(response.followers_count);
          views.push(response.were_here_count);
          likes.push(response.fan_count);
          pageNames.push(page.name);
          newData.fb_followers = followers.reduce((a, b) => a + b, 0);
          newData.fb_views = views.reduce((a, b) => a + b, 0);
          newData.fb_likes = likes.reduce((a, b) => a + b, 0);
          setPageData(newData);

          document.querySelector("#weekChart_fl").innerHTML = '';
          document.querySelector("#weekChart_vw").innerHTML = '';
          document.querySelector("#weekChart_likes").innerHTML = '';
          renderCharts("#weekChart_fl", followers, pageNames);
          renderCharts("#weekChart_vw", views, pageNames);
          renderCharts("#weekChart_likes", likes, pageNames);
        })
      });
    }
  }

  function setAllProperty(elements, type) {
    elements.forEach((e) => {
      e.setProperty("display", "none");
      console.log(e);
    });
  }
  return (
    <div>
      {!userToken &&
      <main className="main-container auth-card">
        <div className="main-cards">
          <div className="card">
            <div className="card-inner">
              <span className="text-blue ">Facebook authorization required to view analytics.</span>

              <button onClick={fblogin}>Login with Facebook</button>
            </div>
          </div>
        </div>
      </main>}
      {userToken &&
        <div>
          <div className="main-title">
            <p className="font-weight-bold">FACEBOOK</p>
          </div>
          <div className="main-title">
            <p className="">Username: {userState && userState.name}</p>
          </div>

          <div className="main-cards">
            <div className="card">
              <div className="card-inner">
                <p className="text-primary">FOLLOWERS</p>
                <span className="material-icons-outlined text-blue">groups</span>
              </div>
              <span
                id="fb_followers"
                className="text-primary font-weight-bold"
              >{pageData && pageData.fb_followers}</span>
            </div>

            <div className="card">
              <div className="card-inner">
                <p className="text-primary">VIEWS</p>
                <span className="material-icons-outlined text-blue">movie</span>
              </div>
              <span id="fb_views" className="text-primary font-weight-bold">{pageData && pageData.fb_views}</span>
            </div>

            <div className="card">
              <div className="card-inner">
                <p className="text-primary">LIKES</p>
                <span className="material-icons-outlined text-blue">thumb_up</span>
              </div>
              <span id="yt_likes" className="text-primary font-weight-bold">{pageData && pageData.fb_likes}</span>
            </div>
          </div>
          
          <div className="button-container">

            <div className="right-buttons">
              <button id="bar_btn" onClick={() => {
                document.querySelectorAll(".linear_chart").forEach((e) => {
                  e.style.display = 'none';
                  console.log(e);
                });
                document.querySelectorAll(".bar_chart").forEach((e) => {
                  e.style.display = 'grid';
                });
              }}>Bar Chart</button>
              <button id="lnr_btn" onClick={() => {
                document.querySelectorAll(".linear_chart").forEach((e) => {
                  e.style.display = 'grid';
                });
                document.querySelectorAll(".bar_chart").forEach((e) => {
                  e.style.display = 'none';
                });
              }}>Linear Chart</button>
            </div>
          </div>

          <div className="chart_daily">
            <div className="charts-card">
              <p className="chart-title">FOLLOWERS BY PAGE</p>
              
              <div className="bar_chart" id="weekChart_fl"></div>
              <div className="linear_chart" id="weekChart_fl_linear"></div>
            </div>

            <div className="charts-card">
              <p className="chart-title">VIEWS BY PAGE</p>
              
              <div className="bar_chart" id="weekChart_vw"></div>
              <div className="linear_chart" id="weekChart_vw_linear"></div>
            </div>

            <div className="charts-card">
              <p className="chart-title">LIKES BY PAGE</p>
              
              <div  className="bar_chart" id="weekChart_likes"></div>
              <div className="linear_chart" id="weekChart_likes_linear"></div>
            </div>
          </div>
        </div>
      }
    </div>
  );
}
export default Facebook;