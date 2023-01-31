export default () => {
    const container = document.createElement('div')

    const template = `
    <div class="container3">
        <div class="main-video-container">
           <div id="proximo">
               <video src="https://ns569461.ip-51-79-82.net/D/dragon-ball-z-dublado-2-temporada-dublado/01.MP4" autoplay controls class="main-video"></video>
               <h3 class="main-vid-title">Dragon Ball Z episodio 1</h3>
           </div>
        </div>
        <a href="#home">
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
            <a href="#ep2">
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
                <a href="#ep2Lista">
                    <figure class="card-banner">
                        <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                    </figure>
                </a>
                <div class="title-wrapper">
                    <a href="#ep2Lista">
                        <h3 class="card-title">Dragon Ball Z episodio 2</h3>
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
                <a href="#ep3Lista">
                    <figure class="card-banner">
                        <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                    </figure>
                </a>
                <div class="title-wrapper">
                    <a href="#ep3Lista">
                        <h3 class="card-title">Dragon Ball Z episodio 3</h3>
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
                <a href="#ep4Lista">
                    <figure class="card-banner">
                        <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                    </figure>
                </a>
                <div class="title-wrapper">
                    <a href="#ep4Lista">
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
            <li>
            <div class="movie-card">
                <a href="#ep2Lista">
                    <figure class="card-banner">
                        <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                    </figure>
                </a>
                <div class="title-wrapper">
                    <a href="#ep2Lista">
                        <h3 class="card-title">Dragon Ball Z episodio 82</h3>
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
                <a href="#ep3Lista">
                    <figure class="card-banner">
                        <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                    </figure>
                </a>
                <div class="title-wrapper">
                    <a href="#ep3Lista">
                        <h3 class="card-title">Dragon Ball Z episodio 83</h3>
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
                <a href="#ep4Lista">
                    <figure class="card-banner">
                        <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                    </figure>
                </a>
                <div class="title-wrapper">
                    <a href="#ep4Lista">
                        <h3 class="card-title">Dragon Ball Z episodio 84</h3>
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
                        <h3 class="card-title">Dragon Ball Z episodio 85</h3>
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
                        <h3 class="card-title">Dragon Ball Z episodio 86</h3>
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
                        <h3 class="card-title">Dragon Ball Z episodio 87</h3>
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
                        <h3 class="card-title">Dragon Ball Z episodio 88</h3>
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
                        <h3 class="card-title">Dragon Ball Z episodio 89 </h3>
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
                        <h3 class="card-title">Dragon Ball Z episodio 90</h3>
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
                        <h3 class="card-title">Dragon Ball Z episodio 91</h3>
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
                        <h3 class="card-title">Dragon Ball Z episodio 92</h3>
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
                        <h3 class="card-title">Dragon Ball Z episodio 93</h3>
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
                        <h3 class="card-title">Dragon Ball Z episodio 94</h3>
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
                        <h3 class="card-title">Dragon Ball Z episodio 95</h3>
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
                        <h3 class="card-title">Dragon Ball Z episodio 96</h3>
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
                        <h3 class="card-title">Dragon Ball Z episodio 97</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 98</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 99</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 100</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 101</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 102</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 103</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 104</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 105</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 106</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 107</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 108</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 109</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 110</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 111</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 112</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 113</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 114</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 115</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 116</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 117</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 118</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 119</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 120</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 121</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 122</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 123</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 124</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 125</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 126</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 127</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 128</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 129</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 130</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 131</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 132</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 133</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 134</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 135</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 136</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 137</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 138</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 139</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 140</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 141</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 142</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 143</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 144</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 145</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 146</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 147</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 148</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 149</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 150</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 151</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 152</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 153</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 154</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 155</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 156</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 157</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 158</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 159</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 160</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 161</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 162</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 163</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 164</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 165</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 166</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 167</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 168</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 169</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 170</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 171</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 172</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 173</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 174</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 175</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 176</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 177</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 178</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 179</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 180</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 181</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 182</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 183</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 184</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 185</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 186</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 187</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 188</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 189</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 190</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 191</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 192</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 193</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 194</h3>
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
                            <h3 class="card-title">Dragon Ball Z episodio 195</h3>
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
                        <h3 class="card-title">Dragon Ball Z episodio 196</h3>
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
                        <h3 class="card-title">Dragon Ball Z episodio 197</h3>
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
                        <h3 class="card-title">Dragon Ball Z episodio 198</h3>
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
                        <h3 class="card-title">Dragon Ball Z episodio 199</h3>
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
                        <h3 class="card-title">Dragon Ball Z episodio 200</h3>
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
                        <h3 class="card-title">Dragon Ball Z episodio 201</h3>
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
                        <h3 class="card-title">Dragon Ball Z episodio 202</h3>
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
                        <h3 class="card-title">Dragon Ball Z episodio 203</h3>
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
                        <h3 class="card-title">Dragon Ball Z episodio 204</h3>
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
                        <h3 class="card-title">Dragon Ball Z episodio 205</h3>
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
                        <h3 class="card-title">Dragon Ball Z episodio 206</h3>
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
                        <h3 class="card-title">Dragon Ball Z episodio 207</h3>
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
                        <h3 class="card-title">Dragon Ball Z episodio 208</h3>
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
                        <h3 class="card-title">Dragon Ball Z episodio 209</h3>
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
                        <h3 class="card-title">Dragon Ball Z episodio 210</h3>
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
                        <h3 class="card-title">Dragon Ball Z episodio 211</h3>
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
                        <h3 class="card-title">Dragon Ball Z episodio 212</h3>
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
                        <h3 class="card-title">Dragon Ball Z episodio 213</h3>
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
                        <h3 class="card-title">Dragon Ball Z episodio 214</h3>
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
                        <h3 class="card-title">Dragon Ball Z episodio 215</h3>
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
                        <h3 class="card-title">Dragon Ball Z episodio 216</h3>
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
                        <h3 class="card-title">Dragon Ball Z episodio 217</h3>
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
                        <h3 class="card-title">Dragon Ball Z episodio 218</h3>
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
                        <h3 class="card-title">Dragon Ball Z episodio 219</h3>
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
                        <h3 class="card-title">Dragon Ball Z episodio 220</h3>
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
                        <h3 class="card-title">Dragon Ball Z episodio 221</h3>
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
                    <h3 class="card-title">Dragon Ball Z episodio 222</h3>
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
                        <h3 class="card-title">Dragon Ball Z episodio 223</h3>
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
                        <h3 class="card-title">Dragon Ball Z episodio 224</h3>
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
                        <h3 class="card-title">Dragon Ball Z episodio 225</h3>
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
                        <h3 class="card-title">Dragon Ball Z episodio 226</h3>
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
                        <h3 class="card-title">Dragon Ball Z episodio 227</h3>
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
                        <h3 class="card-title">Dragon Ball Z episodio 228</h3>
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
                    <h3 class="card-title">Dragon Ball Z episodio 229</h3>
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
                    <h3 class="card-title">Dragon Ball Z episodio 230</h3>
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
                    <h3 class="card-title">Dragon Ball Z episodio 231</h3>
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
                <h3 class="card-title">Dragon Ball Z episodio 232</h3>
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
                <h3 class="card-title">Dragon Ball Z episodio 233</h3>
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
                <h3 class="card-title">Dragon Ball Z episodio 234</h3>
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
                <h3 class="card-title">Dragon Ball Z episodio 235</h3>
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
                <h3 class="card-title">Dragon Ball Z episodio 236</h3>
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
                <h3 class="card-title">Dragon Ball Z episodio 237</h3>
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
                <h3 class="card-title">Dragon Ball Z episodio 238</h3>
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
                <h3 class="card-title">Dragon Ball Z episodio 239</h3>
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
                <h3 class="card-title">Dragon Ball Z episodio 240</h3>
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
                <h3 class="card-title">Dragon Ball Z episodio 241</h3>
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
                <h3 class="card-title">Dragon Ball Z episodio 242</h3>
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
                <h3 class="card-title">Dragon Ball Z episodio 243</h3>
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
                <h3 class="card-title">Dragon Ball Z episodio 244</h3>
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
                <h3 class="card-title">Dragon Ball Z episodio 245</h3>
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
                <h3 class="card-title">Dragon Ball Z episodio 246</h3>
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
                <h3 class="card-title">Dragon Ball Z episodio 247</h3>
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
                <h3 class="card-title">Dragon Ball Z episodio 248</h3>
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
                <h3 class="card-title">Dragon Ball Z episodio 249</h3>
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
                <h3 class="card-title">Dragon Ball Z episodio 250</h3>
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
                <h3 class="card-title">Dragon Ball Z episodio 251</h3>
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
                <h3 class="card-title">Dragon Ball Z episodio 252</h3>
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
                <h3 class="card-title">Dragon Ball Z episodio 253</h3>
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
                <h3 class="card-title">Dragon Ball Z episodio 254</h3>
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
                <h3 class="card-title">Dragon Ball Z episodio 255</h3>
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
                <h3 class="card-title">Dragon Ball Z episodio 256</h3>
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
                <h3 class="card-title">Dragon Ball Z episodio 257</h3>
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
                <h3 class="card-title">Dragon Ball Z episodio 258</h3>
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
                <h3 class="card-title">Dragon Ball Z episodio 259</h3>
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
                <h3 class="card-title">Dragon Ball Z episodio 260</h3>
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
                <h3 class="card-title">Dragon Ball Z episodio 261</h3>
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
                <h3 class="card-title">Dragon Ball Z episodio 262</h3>
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
                <h3 class="card-title">Dragon Ball Z episodio 263</h3>
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