import React from 'react';
import './Covid.css'

const Covid = () => {
    return (
        <div className="covid">
            <div className="update">
                <div className="d-flex m-3">
                    <img style={{ width: "50px", }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAe1BMVEUAak70KkEAbU/7JkD4KEEAbk/6J0H+JEAAaU7YNUN0V0rIPESLUUjBP0VpWUraNEPtLEGpR0bQOUQqZU2PUEi3QkXjMELoLkKlSEefSkceZU1iW0tRX0u9QEVVXktuWEpCYUyEUkl8VUmXT0icTkhGYEymSEevRUZgW0uxzhtoAAADw0lEQVR4nO3d23aiMBQGYNmJRBQV0VJF7Xnavv8TTlCpbaeztgeSdMP/XXlp/pVsAoSk1wMAAAAAAAAAAAAAAAAAAAD4gir9vd3v0H/oV7F5lOt0Nk6KTCujdFYk41m6LpHTjk1hvcozo1SstY727K9YKZPlq3Wv4zERzRcjbeI6mu90bHS+mHc3JRqkiVL/i+cjJqWStOxkSLTZxmw+dUrx9q5zIdF9Yk7L55CSSe47FVJ/UpwV0D6kYtIP/cd9oYfzetAxpOmfTvQkGtxcFNA+pJtB+0OiYRRfGFAljoatz2hsrgioYsaD0G1wiTbZNV3o0JGyTXs7Uj+9uAp9pk3a1ksb3Vw7yGpm29J+lKuGEooilYRujAuD4voydBQX7Sva5W0TZehI35ahm9SwphOyGWXtymhQNJ1Q1Y/aNNZo2nxCNqNpe65rNGqyUh/Fo7Zk1F82NR/6zry2Yw5J964Sshm14znb3EUdqul56OY1wE2p/oioBSWbVs3ddvxErcRn9OA2IZvRQ+gmXsntMKtIH2r06O5qVjOPsjNyHlAldCOvQTM30+qv1KvgblS6rtWHjOTez9Kbj05k79XexHajgZ+EbEZSu5HrWeOR3Plj5imhKMpCN/VCQ/dzopoZhm7sRSh3PbE+0rnIkTb3VYkqSuJDEVp4jWghsBtR4m+c2ZGWCIzI08y6puS9VaMnzxE9ietGtPU5zuxIk7dYhPzNG/duxUU09zdv3DPiLvtDv6XIFiNpE2xa+rrLr8VLYSONRn6rta3X0l7wk4PVMkxEhbSIfFdrW4yERVT6j8gIm1/fBYjoLnSjzzPxfc23A20SutFn8X2HtotI1l0apQEiSmVF9BwgomdZEb0EiOgFEbUsIgw0Dso1Cxd9HqaOLNyAsHAby6IAA01WKcIjNR4ezLLweJ+Hl0QsvGpk4YU1C8seWFg8w8MSLBYW8rGwHJSHRcUsLE3n4QMHHj6T4Xj82ErW+6FP8MkeCx9+8vD5MMvPR+jxTG4n6mErAx42xOBhWxUeNudhYYsnnuONwiQ+J/oHtptjYdNCnsOtL5ft2PoSG6ieAtvw8rCZMw9bgvOwsTwPxxOcAIdcsHBUCg8H7vBwbNMpGjj8K3QTXMMRcjwcRHiCy4+zTLpxnGWlP5niUFQOTXC0Los2W40DmhlnHPPdjSL9ExwWfwrb/PdVnhmlYq3rqOyvWCmT5av3XsfzOSCicp3OxkmRRcoonRXJeJauS0I8X1Clv7f7HfoPAQAAAAAAAAAAAAAAAAAAgCh/AQzVR+UJST1GAAAAAElFTkSuQmCC" alt="" />
                    <h3>Covid-19 update in Bangladesh</h3>
                </div>
                <div className="grid">
                    <div>
                        <h2 className="text-danger">1,565,827</h2>
                        <h4 className="text-secondary">Confirmed</h4>
                        <p>+339 new cases</p>
                    </div>
                    <div>
                        <h2 className="text-success">1,528,371</h2>
                        <h4 className="text-secondary">Recovered</h4>
                    </div>
                    <div>
                        <h2 className="text-primary">27,778</h2>
                        <h4 className="text-secondary">Deaths</h4>
                        <p>+10 new deaths</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Covid;