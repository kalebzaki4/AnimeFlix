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
        <a href="botaoLista-dragon-ball-z.html">
            <button class="read_button2">
                <img src="list.svg" width="50px" alt="icon lista">
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
    <section id="botaoLista" class="top-rated"; style="display: block; background-color: #1b2227; padding-top: 60px;">
    <div class="container">
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
                <a href="A-Channel.html">
                    <figure class="card-banner">
                        <img src="https://subanimes.cc/wp-content/uploads/2020/11/dragon-ball-z-online-todos-os-episodios.jpg">
                    </figure>
                </a>
                <div class="title-wrapper">
                    <a href="A-Channel.html">
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
    `;

    container.innerHTML = template;

    return container 
}