export default () => {
    const container = document.createElement('div')

    const template = `
    <div class="container3">
        <div class="main-video-container">
           <div id="proximo">
               <video src="https://ns569461.ip-51-79-82.net/D/dragon-ball-z-dublado-2-temporada-dublado/03.MP4" autoplay controls class="main-video"></video>
               <h3 class="main-vid-title">Dragon Ball Z episodio 3</h3>
           </div>
        </div>
        <a href="#ep2">
            <button class="read_button">
                <img src="arrow-back.svg" width="30px" alt="icon flecha">
                <span class="informacao">ANTERIOR</span>
            </button>
        </a>
        <a href="index.html">
            <button class="read_button2">
            <ion-icon class="home" name="home"></ion-icon>
                <span></span>
            </button>
        </a>
            <a href="#ep4">
                <div id="content"></div>
                <button class="read_button3">
                    <span class="informacao2">PROXIMO</span>
                    <img src="arrow-forward.svg" width="30px" alt="icon flecha">
                </button>
            </a>
        <a href="https://api.whatsapp.com/send?text=https://kalebzaki4.github.io/AnimeFlix/dragon-ball-z-episodios.html" target="_blank">
            <button class="read_button4">
                <span class="informacao3">COMAPARTILHAR</span>
                <img class="flecha" src="compartilhar.svg" width="30px" alt="icon flecha">
            </button>
        </a>
    </div>
    <div class="container" style="padding-top: 100px; padding-bottom: 100px;">
    <ul class="movies-list">
        <li>
            <div class="movie-card">
                <a href="A-Channel.html">
                    <figure class="card-banner">
                        <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                    </figure>
                </a>
                <div class="title-wrapper">
                    <a href="A-Channel.html">
                        <h3 class="card-title">Dragon Ball Z episodio 4</h3>
                    </a>
                    <time datetime="1989">1989</time>
                </div>
                <div class="card-meta">
                    <div class="badge badge-outline">SD</div>
                    <div class="duration">
                        <ion-icon name="time-outline"></ion-icon>
                        <time datetime="PT137M">24:13</time>
                    </div>
                    <div class="rating">
                        <ion-icon name="star"></ion-icon>
                        <data>9.3</data>
                    </div>
                </div>
            </div>
        </li>
        <li>
            <div class="movie-card">
                <a href="A-Channel.html">
                    <figure class="card-banner">
                        <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                    </figure>
                </a>
                <div class="title-wrapper">
                    <a href="A-Channel.html">
                        <h3 class="card-title">Dragon Ball Z episodio 5</h3>
                    </a>
                    <time datetime="1989">1989</time>
                </div>
                <div class="card-meta">
                    <div class="badge badge-outline">SD</div>
                    <div class="duration">
                        <ion-icon name="time-outline"></ion-icon>
                        <time datetime="PT137M">24:13</time>
                    </div>
                    <div class="rating">
                        <ion-icon name="star"></ion-icon>
                        <data>9.3</data>
                    </div>
                </div>
            </div>
        </li>
        <li>
            <div class="movie-card">
                <a href="A-Channel.html">
                    <figure class="card-banner">
                        <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                    </figure>
                </a>
                <div class="title-wrapper">
                    <a href="A-Channel.html">
                        <h3 class="card-title">Dragon Ball Z episodio 6</h3>
                    </a>
                    <time datetime="1989">1989</time>
                </div>
                <div class="card-meta">
                    <div class="badge badge-outline">SD</div>
                    <div class="duration">
                        <ion-icon name="time-outline"></ion-icon>
                        <time datetime="PT137M">24:13</time>
                    </div>
                    <div class="rating">
                        <ion-icon name="star"></ion-icon>
                        <data>9.3</data>
                    </div>
                </div>
            </div>
        </li>
        <li>
            <div class="movie-card">
                <a href="A-Channel.html">
                    <figure class="card-banner">
                        <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                    </figure>
                </a>
                <div class="title-wrapper">
                    <a href="A-Channel.html">
                        <h3 class="card-title">Dragon Ball Z episodio 7</h3>
                    </a>
                    <time datetime="1989">1989</time>
                </div>
                <div class="card-meta">
                    <div class="badge badge-outline">SD</div>
                    <div class="duration">
                        <ion-icon name="time-outline"></ion-icon>
                        <time datetime="PT137M">24:13</time>
                    </div>
                    <div class="rating">
                        <ion-icon name="star"></ion-icon>
                        <data>9.3</data>
                    </div>
                </div>
            </div>
        </li>
        <li>
            <div class="movie-card">
                <a href="A-Channel.html">
                    <figure class="card-banner">
                        <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                    </figure>
                </a>
                <div class="title-wrapper">
                    <a href="A-Channel.html">
                        <h3 class="card-title">Dragon Ball Z episodio 8</h3>
                    </a>
                    <time datetime="1989">1989</time>
                </div>
                <div class="card-meta">
                    <div class="badge badge-outline">SD</div>
                    <div class="duration">
                        <ion-icon name="time-outline"></ion-icon>
                        <time datetime="PT137M">24:13</time>
                    </div>
                    <div class="rating">
                        <ion-icon name="star"></ion-icon>
                        <data>9.3</data>
                    </div>
                </div>
            </div>
        </li>
        <li>
            <div class="movie-card">
                <a href="A-Channel.html">
                    <figure class="card-banner">
                        <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                    </figure>
                </a>
                <div class="title-wrapper">
                    <a href="A-Channel.html">
                        <h3 class="card-title">Dragon Ball Z episodio 9 </h3>
                    </a>
                    <time datetime="1989">1989</time>
                </div>
                <div class="card-meta">
                    <div class="badge badge-outline">SD</div>
                    <div class="duration">
                        <ion-icon name="time-outline"></ion-icon>
                        <time datetime="PT137M">24:13</time>
                    </div>
                    <div class="rating">
                        <ion-icon name="star"></ion-icon>
                        <data>9.3</data>
                    </div>
                </div>
            </div>
        </li>
        <li>
            <div class="movie-card">
                <a href="A-Channel.html">
                    <figure class="card-banner">
                        <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                    </figure>
                </a>
                <div class="title-wrapper">
                    <a href="A-Channel.html">
                        <h3 class="card-title">Dragon Ball Z episodio 10</h3>
                    </a>
                    <time datetime="1989">1989</time>
                </div>
                <div class="card-meta">
                    <div class="badge badge-outline">SD</div>
                    <div class="duration">
                        <ion-icon name="time-outline"></ion-icon>
                        <time datetime="PT137M">24:13</time>
                    </div>
                    <div class="rating">
                        <ion-icon name="star"></ion-icon>
                        <data>9.3</data>
                    </div>
                </div>
            </div>
        </li>
        <li>
            <div class="movie-card">
                <a href="A-Channel.html">
                    <figure class="card-banner">
                        <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                    </figure>
                </a>
                <div class="title-wrapper">
                    <a href="A-Channel.html">
                        <h3 class="card-title">Dragon Ball Z episodio 11</h3>
                    </a>
                    <time datetime="1989">1989</time>
                </div>
                <div class="card-meta">
                    <div class="badge badge-outline">SD</div>
                    <div class="duration">
                        <ion-icon name="time-outline"></ion-icon>
                        <time datetime="PT137M">24:13</time>
                    </div>
                    <div class="rating">
                        <ion-icon name="star"></ion-icon>
                        <data>9.3</data>
                    </div>
                </div>
            </div>
        </li>
        <li>
            <div class="movie-card">
                <a href="A-Channel.html">
                    <figure class="card-banner">
                        <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                    </figure>
                </a>
                <div class="title-wrapper">
                    <a href="A-Channel.html">
                        <h3 class="card-title">Dragon Ball Z episodio 12</h3>
                    </a>
                    <time datetime="1989">1989</time>
                </div>
                <div class="card-meta">
                    <div class="badge badge-outline">SD</div>
                    <div class="duration">
                        <ion-icon name="time-outline"></ion-icon>
                        <time datetime="PT137M">24:13</time>
                    </div>
                    <div class="rating">
                        <ion-icon name="star"></ion-icon>
                        <data>9.3</data>
                    </div>
                </div>
            </div>
        </li>
        <li>
            <div class="movie-card">
                <a href="A-Channel.html">
                    <figure class="card-banner">
                        <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                    </figure>
                </a>
                <div class="title-wrapper">
                    <a href="A-Channel.html">
                        <h3 class="card-title">Dragon Ball Z episodio 13</h3>
                    </a>
                    <time datetime="1989">1989</time>
                </div>
                <div class="card-meta">
                    <div class="badge badge-outline">SD</div>
                    <div class="duration">
                        <ion-icon name="time-outline"></ion-icon>
                        <time datetime="PT137M">NA</time>
                    </div>
                    <div class="rating">
                        <ion-icon name="star"></ion-icon>
                        <data>9.3</data>
                    </div>
                </div>
            </div>
        </li>
        <li>
            <div class="movie-card">
                <a href="A-Channel.html">
                    <figure class="card-banner">
                        <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                    </figure>
                </a>
                <div class="title-wrapper">
                    <a href="A-Channel.html">
                        <h3 class="card-title">Dragon Ball Z episodio 14</h3>
                    </a>
                    <time datetime="1989">1989</time>
                </div>
                <div class="card-meta">
                    <div class="badge badge-outline">SD</div>
                    <div class="duration">
                        <ion-icon name="time-outline"></ion-icon>
                        <time datetime="PT137M">24:13</time>
                    </div>
                    <div class="rating">
                        <ion-icon name="star"></ion-icon>
                        <data>9.3</data>
                    </div>
                </div>
            </div>
        </li>
        <li>
            <div class="movie-card">
                <a href="A-Channel.html">
                    <figure class="card-banner">
                        <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                    </figure>
                </a>
                <div class="title-wrapper">
                    <a href="A-Channel.html">
                        <h3 class="card-title">Dragon Ball Z episodio 15</h3>
                    </a>
                    <time datetime="1989">1989</time>
                </div>
                <div class="card-meta">
                    <div class="badge badge-outline">SD</div>
                    <div class="duration">
                        <ion-icon name="time-outline"></ion-icon>
                        <time datetime="PT137M">NA</time>
                    </div>
                    <div class="rating">
                        <ion-icon name="star"></ion-icon>
                        <data>9.3</data>
                    </div>
                </div>
            </div>
        </li>
        <li>
            <div class="movie-card">
                <a href="A-Channel.html">
                    <figure class="card-banner">
                        <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                    </figure>
                </a>
                <div class="title-wrapper">
                    <a href="A-Channel.html">
                        <h3 class="card-title">Dragon Ball Z episodio 16</h3>
                    </a>
                    <time datetime="1989">1989</time>
                </div>
                <div class="card-meta">
                    <div class="badge badge-outline">SD</div>
                    <div class="duration">
                        <ion-icon name="time-outline"></ion-icon>
                        <time datetime="PT137M">24:13</time>
                    </div>
                    <div class="rating">
                        <ion-icon name="star"></ion-icon>
                        <data>9.3</data>
                    </div>
                </div>
            </div>
        </li>
        <li>
            <div class="movie-card">
                <a href="A-Channel.html">
                    <figure class="card-banner">
                        <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                    </figure>
                </a>
                <div class="title-wrapper">
                    <a href="A-Channel.html">
                        <h3 class="card-title">Dragon Ball Z episodio 17</h3>
                    </a>
                    <time datetime="1989">1989</time>
                </div>
                <div class="card-meta">
                    <div class="badge badge-outline">SD</div>
                    <div class="duration">
                        <ion-icon name="time-outline"></ion-icon>
                        <time datetime="PT137M">24:10</time>
                    </div>
                    <div class="rating">
                        <ion-icon name="star"></ion-icon>
                        <data>9.3</data>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</div>

<section id="conteudo" class="top-rated"; style=" background-color: #1b2227; padding-top: 0px;">
    <div class="container" >

        <ul class="movies-list">
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 18</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:13</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 19</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:13</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 20</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:13</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 21</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:13</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 22</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:13</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 23</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:13</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 24</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:13</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 25</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:13</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 26</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:13</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 27</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:13</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 28</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:13</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 29</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">NA</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 30</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:13</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 31</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">NA</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 32</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:13</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 33</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:10</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 34</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:13</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 35</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:13</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 36</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:13</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 37</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:13</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 38</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:13</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 39</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:13</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 40</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:13</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 41</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:13</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 42</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:13</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 43</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:13</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 44</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:13</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 45</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">NA</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 46</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:13</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 47</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">NA</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 48</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:13</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 49</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:10</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 50</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:13</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 51</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:13</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 52</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:13</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 53</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:13</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 54</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:13</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 55</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:13</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 56</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:13</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 57</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:13</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 58</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:13</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 59</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:13</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 60</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:13</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 61</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">NA</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 62</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:13</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 63</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">NA</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 64</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:13</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 65</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:10</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 66</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:13</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 67</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:13</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 68</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:13</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 69</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:13</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 70</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:13</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 71</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:13</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 72</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:13</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 73</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:13</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 74</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:13</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 75</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:13</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 76</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:13</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 77</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">NA</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 78</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:13</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 79</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">NA</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 80</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:13</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="movie-card">
                    <a href="A-Channel.html">
                        <figure class="card-banner">
                            <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                        </figure>
                    </a>
                    <div class="title-wrapper">
                        <a href="A-Channel.html">
                            <h3 class="card-title">Dragon Ball Z episodio 81</h3>
                        </a>
                        <time datetime="1989">1989</time>
                    </div>
                    <div class="card-meta">
                        <div class="badge badge-outline">SD</div>
                        <div class="duration">
                            <ion-icon name="time-outline"></ion-icon>
                            <time datetime="PT137M">24:10</time>
                        </div>
                        <div class="rating">
                            <ion-icon name="star"></ion-icon>
                            <data>9.3</data>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>

    </div>
</section> 
`;

    container.innerHTML = template;

    return container 
}