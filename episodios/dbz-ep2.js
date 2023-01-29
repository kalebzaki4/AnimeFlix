export default () => {
    const container = document.createElement('div')

    const template = `
    <div class="container3">
        <div class="main-video-container">
           <div id="proximo">
               <video src="https://ns569461.ip-51-79-82.net/D/dragon-ball-z-dublado-2-temporada-dublado/02.MP4" autoplay controls class="main-video"></video>
               <h3 class="main-vid-title">Dragon Ball Z episodio 2</h3>
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
    <section class="top-rated">
                    <div class="container">
                        <h2 class="h2 section-tilte">Recomendados</h2>
            
                                <ul class="movies-list" >
            
                                    <li>
                                        <div class="movie-card">
            
                                            <a href="A-Channel.html">
                                                <figure class="card-banner">
                                                    <img src="https://www.anitube.site/wp-content/uploads/A-Channel.jpg" alt="Jujutsu-Kaisen">
                                                </figure>
                                            </a>
            
                                            <div class="title-wrapper">
                                                <a href="A-Channel.html">
                                                    <h3 class="card-title">A-Channel – Todos os Episodios</h3>
                                                </a>
            
                                                <time datetime="2011">2011</time>
                                            </div>
            
                                            <div class="card-meta">
                                                <div class="badge badge-outline">HD</div>
            
                                                <div class="duration">
                                                    <ion-icon name="time-outline"></ion-icon>
            
                                                    <time datetime="PT137M">NA</time>
                                                </div>
            
                                                <div class="rating">
                                                    <ion-icon name="star"></ion-icon>
            
                                                    <data>6</data>
                                                </div>
            
                                            </div>
            
            
                                        </div>
                                    </li>
            
                                    <li>
                                        <div class="movie-card">
            
                                            <a href="movie-details.html">
                                                <figure class="card-banner">
                                                    <img src="https://www.anitube.site/wp-content/uploads/A3-Season-Autumn-Winter-Todos-os-Episódios-AniTube.jpg" alt="Black Cover">
                                                </figure>
                                            </a>
            
                                            <div class="title-wrapper">
                                                <a href="movie-details.html">
                                                    <h3 class="card-title">A3! Season Autumn & Winter – Todos os Episódios</h3>
                                                </a>
            
                                                <time datetime="2020">2020</time>
                                            </div>
            
                                            <div class="card-meta">
                                                <div class="badge badge-outline">HD</div>
            
                                                <div class="duration">
                                                    <ion-icon name="time-outline"></ion-icon>
            
                                                    <time datetime="PT137M">NA</time>
                                                </div>
            
                                                <div class="rating">
                                                    <ion-icon name="star"></ion-icon>
            
                                                    <data>1.2</data>
                                                </div>
            
                                            </div>
            
            
                                        </div>
                                    </li>
            
                                    <li>
                                        <div class="movie-card">
            
                                            <a href="movie-details.html">
                                                <figure class="card-banner">
                                                    <img src="https://www.anitube.site/wp-content/uploads/A3-Season-Spring-Summer-Todos-os-Episódios-AniTube.jpg" alt="chainsaw man ">
                                                </figure>
                                            </a>
            
                                            <div class="title-wrapper">
                                                <a href="movie-details.html">
                                                    <h3 class="card-title">3! Season Spring & Summer – Todos os Episódios</h3>
                                                </a>
            
                                                <time datetime="2020">2020</time>
                                            </div>
            
                                            <div class="card-meta">
                                                <div class="badge badge-outline">HD</div>
            
                                                <div class="duration">
                                                    <ion-icon name="time-outline"></ion-icon>
            
                                                    <time datetime="PT137M">NA</time>
                                                </div>
            
                                                <div class="rating">
                                                    <ion-icon name="star"></ion-icon>
            
                                                    <data>1.2</data>
                                                </div>
            
                                            </div>
            
            
                                        </div>
                                    </li>
            
                                    <li>
                                        <div class="movie-card">
            
                                            <a href="movie-details.html">
                                                <figure class="card-banner">
                                                    <img src="https://www.anitube.site/wp-content/uploads/303-1.jpg" alt="Death-Note">
                                                </figure>
                                            </a>
            
                                            <div class="title-wrapper">
                                                <a href="movie-details.html">
                                                    <h3 class="card-title">Aa! Megami-sama !: Chichaitte Koto wa Benri da ne – Todos os Episódios</h3>
                                                </a>
            
                                                <time datetime="2018">2018</time>
                                            </div>
            
                                            <div class="card-meta">
                                                <div class="badge badge-outline">SD</div>
            
                                                <div class="duration">
                                                    <ion-icon name="time-outline"></ion-icon>
            
                                                    <time datetime="PT137M">NA</time>
                                                </div>
            
                                                <div class="rating">
                                                    <ion-icon name="star"></ion-icon>
            
                                                    <data>8.0</data>
                                                </div>
            
                                            </div>
            
            
                                        </div>
                                    </li>
            
                                    <li>
                                        <div class="movie-card">
            
                                            <a href="movie-details.html">
                                                <figure class="card-banner">
                                                    <img src="https://www.anitube.site/wp-content/uploads/Aa-Megami-sama.jpg" alt="Hunter X Hunter">
                                                </figure>
                                            </a>
            
                                            <div class="title-wrapper">
                                                <a href="movie-details.html">
                                                    <h3 class="card-title">Aa! Megami-sama! – Todos os Episodios</h3>
                                                </a>
            
                                                <time datetime="2005">2005</time>
                                            </div>
            
                                            <div class="card-meta">
                                                <div class="badge badge-outline">SD</div>
            
                                                <div class="duration">
                                                    <ion-icon name="time-outline"></ion-icon>
            
                                                    <time datetime="PT137M">NA</time>
                                                </div>
            
                                                <div class="rating">
                                                    <ion-icon name="star"></ion-icon>
            
                                                    <data>2.6</data>
                                                </div>
            
                                            </div>
            
            
                                        </div>
                                    </li>
            
                                    <li>
                                        <div class="movie-card">
            
                                            <a href="movie-details.html">
                                                <figure class="card-banner">
                                                    <img src="https://www.anitube.site/wp-content/uploads/Aa-Megami-sama-1.jpg" alt="Tokyo Ghoul">
                                                </figure>
                                            </a>
            
                                            <div class="title-wrapper">
                                                <a href="movie-details.html">
                                                    <h3 class="card-title">a! Megami-sama! Dublado – Todos os Episodios</h3>
                                                </a>
            
                                                <time datetime="2005">2005</time>
                                            </div>
            
                                            <div class="card-meta">
                                                <div class="badge badge-outline">SD</div>
            
                                                <div class="duration">
                                                    <ion-icon name="time-outline"></ion-icon>
            
                                                    <time datetime="PT137M">NA</time>
                                                </div>
            
                                                <div class="rating">
                                                    <ion-icon name="star"></ion-icon>
            
                                                    <data>5.6</data>
                                                </div>
            
                                            </div>
            
            
                                        </div>
                                    </li>
            
                                    <li>
                                        <div class="movie-card">
            
                                            <a href="movie-details.html">
                                                <figure class="card-banner">
                                                    <img src="https://www.anitube.site/wp-content/uploads/Abarenbou-Kishi-Matsutarou.jpg" alt="SPY x FAMILY">
                                                </figure>
                                            </a>
            
                                            <div class="title-wrapper">
                                                <a href="movie-details.html">
                                                    <h3 class="card-title">Abarenbou Kishi!! Matsutarou – Todos os Episodios</h3>
                                                </a>
            
                                                <time datetime="2014">2014</time>
                                            </div>
            
                                            <div class="card-meta">
                                                <div class="badge badge-outline">SD</div>
            
                                                <div class="duration">
                                                    <ion-icon name="time-outline"></ion-icon>
            
                                                    <time datetime="PT137M">NA</time>
                                                </div>
            
                                                <div class="rating">
                                                    <ion-icon name="star"></ion-icon>
            
                                                    <data>2.3</data>
                                                </div>
            
                                            </div>
            
            
                                        </div>
                                    </li>
            
                                    <li>
                                        <div class="movie-card">
            
                                            <a href="movie-details.html">
                                                <figure class="card-banner">
                                                    <img src="https://www.anitube.site/wp-content/uploads/Abenobashi-Mahou-Shoutengai.jpg" alt="Bleach">
                                                </figure>
                                            </a>
            
                                            <div class="title-wrapper">
                                                <a href="movie-details.html">
                                                    <h3 class="card-title">Abenobashi Mahou Shoutengai – Todos os Episodios</h3>
                                                </a>
            
                                                <time datetime="2002">2002</time>
                                            </div>
            
                                            <div class="card-meta">
                                                <div class="badge badge-outline">SD</div>
            
                                                <div class="duration">
                                                    <ion-icon name="time-outline"></ion-icon>
            
                                                    <time datetime="PT137M">NA</time>
                                                </div>
            
                                                <div class="rating">
                                                    <ion-icon name="star"></ion-icon>
            
                                                    <data>1.3</data>
                                                </div>
            
                                            </div>
            
            
                                        </div>
                                    </li>
            
                                    <li>
                                        <div class="movie-card">
            
                                            <a href="movie-details.html">
                                                <figure class="card-banner">
                                                    <img src="https://www.anitube.site/wp-content/uploads/Absolute-Duo.jpg" alt="Bleach">
                                                </figure>
                                            </a>
            
                                            <div class="title-wrapper">
                                                <a href="movie-details.html">
                                                    <h3 class="card-title">Absolute Duo – Todos os Episodios</h3>
                                                </a>
            
                                                <time datetime="2014">2014</time>
                                            </div>
            
                                            <div class="card-meta">
                                                <div class="badge badge-outline">HD</div>
            
                                                <div class="duration">
                                                    <ion-icon name="time-outline"></ion-icon>
            
                                                    <time datetime="PT137M">NA</time>
                                                </div>
            
                                                <div class="rating">
                                                    <ion-icon name="star"></ion-icon>
            
                                                    <data>1.2</data>
                                                </div>
            
                                            </div>
            
            
                                        </div>
                                    </li>
            
                                    <li>
                                        <div class="movie-card">
            
                                            <a href="movie-details.html">
                                                <figure class="card-banner">
                                                    <img src="https://www.anitube.site/wp-content/uploads/ACCA.jpg" alt="Bleach">
                                                </figure>
                                            </a>
            
                                            <div class="title-wrapper">
                                                <a href="movie-details.html">
                                                    <h3 class="card-title">ACCA: 13-ku Kansatsu-ka – Todos os Episodios</h3>
                                                </a>
            
                                                <time datetime="2017">2017</time>
                                            </div>
            
                                            <div class="card-meta">
                                                <div class="badge badge-outline">HD</div>
            
                                                <div class="duration">
                                                    <ion-icon name="time-outline"></ion-icon>
            
                                                    <time datetime="PT137M">NA</time>
                                                </div>
            
                                                <div class="rating">
                                                    <ion-icon name="star"></ion-icon>
            
                                                    <data>1.5</data>
                                                </div>
            
                                            </div>
            
            
                                        </div>
                                    </li>
            
                                    <li>
                                        <div class="movie-card">
            
                                            <a href="movie-details.html">
                                                <figure class="card-banner">
                                                    <img src="https://www.anitube.site/wp-content/uploads/Accel-World.jpg" alt="Bleach">
                                                </figure>
                                            </a>
            
                                            <div class="title-wrapper">
                                                <a href="movie-details.html">
                                                    <h3 class="card-title">Accel World – Todos os Episodios</h3>
                                                </a>
            
                                                <time datetime="2012">2012</time>
                                            </div>
            
                                            <div class="card-meta">
                                                <div class="badge badge-outline">HD</div>
            
                                                <div class="duration">
                                                    <ion-icon name="time-outline"></ion-icon>
            
                                                    <time datetime="PT137M">NA</time>
                                                </div>
            
                                                <div class="rating">
                                                    <ion-icon name="star"></ion-icon>
            
                                                    <data>2.4</data>
                                                </div>
            
                                            </div>
            
            
                                        </div>
                                    </li>
            
                                    <li>
                                        <div class="movie-card">
            
                                            <a href="movie-details.html">
                                                <figure class="card-banner">
                                                    <img src="https://www.anitube.site/wp-content/uploads/Acchi-Kocchi.jpg" alt="Bleach">
                                                </figure>
                                            </a>
            
                                            <div class="title-wrapper">
                                                <a href="movie-details.html">
                                                    <h3 class="card-title">Acchi Kocchi – Todos os Episodios</h3>
                                                </a>
            
                                                <time datetime="2012">2012</time>
                                            </div>
            
                                            <div class="card-meta">
                                                <div class="badge badge-outline">SD</div>
            
                                                <div class="duration">
                                                    <ion-icon name="time-outline"></ion-icon>
            
                                                    <time datetime="PT137M">NA</time>
                                                </div>
            
                                                <div class="rating">
                                                    <ion-icon name="star"></ion-icon>
            
                                                    <data>1.7</data>
                                                </div>
            
                                            </div>
            
            
                                        </div>
                                    </li>
            
                                    <li>
                                        <div class="movie-card">
            
                                            <a href="movie-details.html">
                                                <figure class="card-banner">
                                                    <img src="https://www.anitube.site/wp-content/uploads/Active-Raid-Kidou-Kyoushuushitsu-Dai-Hachi-Gakari-2nd.jpg" alt="Bleach">
                                                </figure>
                                            </a>
            
                                            <div class="title-wrapper">
                                                <a href="movie-details.html">
                                                    <h3 class="card-title">Active Raid: Kidou Kyoushuushitsu Dai Hachi Gakari 2nd – Todos os Episodios</h3>
                                                </a>
            
                                                <time datetime="2015">2015</time>
                                            </div>
            
                                            <div class="card-meta">
                                                <div class="badge badge-outline">HD</div>
            
                                                <div class="duration">
                                                    <ion-icon name="time-outline"></ion-icon>
            
                                                    <time datetime="PT137M">NA</time>
                                                </div>
            
                                                <div class="rating">
                                                    <ion-icon name="star"></ion-icon>
            
                                                    <data>2.1</data>
                                                </div>
            
                                            </div>
            
            
                                        </div>
                                    </li>
            
                                    <li>
                                        <div class="movie-card">
            
                                            <a href="movie-details.html">
                                                <figure class="card-banner">
                                                    <img src="https://www.anitube.site/wp-content/uploads/Active-Raid-Kidou-Kyoushuushitsu-Dai-Hakkei-1.jpg" alt="Bleach">
                                                </figure>
                                            </a>
            
                                            <div class="title-wrapper">
                                                <a href="movie-details.html">
                                                    <h3 class="card-title">Active Raid: Kidou Kyoushuushitsu Dai Hakkei – Todos os Episodios</h3>
                                                </a>
            
                                                <time datetime="2016">2016</time>
                                            </div>
            
                                            <div class="card-meta">
                                                <div class="badge badge-outline">HD</div>
            
                                                <div class="duration">
                                                    <ion-icon name="time-outline"></ion-icon>
            
                                                    <time datetime="PT137M">NA</time>
                                                </div>
            
                                                <div class="rating">
                                                    <ion-icon name="star"></ion-icon>
            
                                                    <data>2.4</data>
                                                </div>
            
                                            </div>
            
            
                                        </div>
                                    </li>
            
                                    <li>
                                        <div class="movie-card">
            
                                            <a href="movie-details.html">
                                                <figure class="card-banner">
                                                    <img src="https://www.anitube.site/wp-content/uploads/Actors-Songs-Connection-Todos-os-Episodios.jpg" alt="Bleach">
                                                </figure>
                                            </a>
            
                                            <div class="title-wrapper">
                                                <a href="movie-details.html">
                                                    <h3 class="card-title">Actors: Songs Connection – Todos os Episódios</h3>
                                                </a>
            
                                                <time datetime="2019">2019</time>
                                            </div>
            
                                            <div class="card-meta">
                                                <div class="badge badge-outline">HD</div>
            
                                                <div class="duration">
                                                    <ion-icon name="time-outline"></ion-icon>
            
                                                    <time datetime="PT137M">NA</time>
                                                </div>
            
                                                <div class="rating">
                                                    <ion-icon name="star"></ion-icon>
            
                                                    <data>1.3</data>
                                                </div>
            
                                            </div>
            
            
                                        </div>
                                    </li>
            
                                    <li>
                                        <div class="movie-card">
            
                                            <a href="movie-details.html">
                                                <figure class="card-banner">
                                                    <img src="https://www.anitube.site/wp-content/uploads/Adachi-to-Shimamura-Todos-os-Episódios-AniTube.jpg" alt="Bleach">
                                                </figure>
                                            </a>
            
                                            <div class="title-wrapper">
                                                <a href="movie-details.html">
                                                    <h3 class="card-title"> Adachi to Shimamura – Todos os Episódios</h3>
                                                </a>
            
                                                <time datetime="2020">2020</time>
                                            </div>
            
                                            <div class="card-meta">
                                                <div class="badge badge-outline">HD</div>
            
                                                <div class="duration">
                                                    <ion-icon name="time-outline"></ion-icon>
            
                                                    <time datetime="PT137M">NA</time>
                                                </div>
            
                                                <div class="rating">
                                                    <ion-icon name="star"></ion-icon>
            
                                                    <data>2.1</data>
                                                </div>
            
                                            </div>
            
            
                                        </div>
                                    </li>
            
                                    <li>
                                        <div class="movie-card">
            
                                            <a href="movie-details.html">
                                                <figure class="card-banner">
                                                    <img src="https://www.anitube.site/wp-content/uploads/B-Project.jpg" alt="Bleach">
                                                </figure>
                                            </a>
            
                                            <div class="title-wrapper">
                                                <a href="movie-details.html">
                                                    <h3 class="card-title">B Project – Todos os Episódios</h3>
                                                </a>
            
                                                <time datetime="2016">2016</time>
                                            </div>
            
                                            <div class="card-meta">
                                                <div class="badge badge-outline">HD</div>
            
                                                <div class="duration">
                                                    <ion-icon name="time-outline"></ion-icon>
            
                                                    <time datetime="PT137M">NA</time>
                                                </div>
            
                                                <div class="rating">
                                                    <ion-icon name="star"></ion-icon>
            
                                                    <data>4.4</data>
                                                </div>
            
                                            </div>
            
            
                                        </div>
                                    </li>
            
                                    <li>
                                        <div class="movie-card">
            
                                            <a href="movie-details.html">
                                                <figure class="card-banner">
                                                    <img src="https://www.anitube.site/wp-content/uploads/b-project-zecchou-emotion.jpg" alt="Bleach">
                                                </figure>
                                            </a>
            
                                            <div class="title-wrapper">
                                                <a href="movie-details.html">
                                                    <h3 class="card-title">B-Project: Zecchou Emotion</h3> 
                                                </a>
            
                                                <time datetime="2019">2019</time>
                                            </div>
            
                                            <div class="card-meta">
                                                <div class="badge badge-outline">HD</div>
            
                                                <div class="duration">
                                                    <ion-icon name="time-outline"></ion-icon>
            
                                                    <time datetime="PT137M">NA</time>
                                                </div>
            
                                                <div class="rating">
                                                    <ion-icon name="star"></ion-icon>
            
                                                    <data>7.2</data>
                                                </div>
            
                                            </div>
            
            
                                        </div>
                                    </li>
            
                                    <li>
                                        <div class="movie-card">
            
                                            <a href="movie-details.html">
                                                <figure class="card-banner">
                                                    <img src="https://www.anitube.site/wp-content/uploads/B-The-Beginning.jpg" alt="Bleach">
                                                </figure>
                                            </a>
            
                                            <div class="title-wrapper">
                                                <a href="movie-details.html">
                                                    <h3 class="card-title">B: The Beginning – Todos os Episódios</h3>
                                                </a>
            
                                                <time datetime="2018">2018</time>
                                            </div>
            
                                            <div class="card-meta">
                                                <div class="badge badge-outline">HD</div>
            
                                                <div class="duration">
                                                    <ion-icon name="time-outline"></ion-icon>
            
                                                    <time datetime="PT137M">NA</time>
                                                </div>
            
                                                <div class="rating">
                                                    <ion-icon name="star"></ion-icon>
            
                                                    <data>7.1</data>
                                                </div>
            
                                            </div>
            
            
                                        </div>
                                    </li>
            
                                    <li>
                                        <div class="movie-card">
            
                                            <a href="movie-details.html">
                                                <figure class="card-banner">
                                                    <img src="https://www.anitube.site/wp-content/uploads/Babel-II-Beyond-Infinity.jpg" alt="Bleach">
                                                </figure>
                                            </a>
            
                                            <div class="title-wrapper">
                                                <a href="movie-details.html">
                                                    <h3 class="card-title">Babel II: Beyond Infinity – Todos os Episódios</h3>
                                                </a>
            
                                                <time datetime="2001">2001</time>
                                            </div>
            
                                            <div class="card-meta">
                                                <div class="badge badge-outline">SD</div>
            
                                                <div class="duration">
                                                    <ion-icon name="time-outline"></ion-icon>
            
                                                    <time datetime="PT137M">NA</time>
                                                </div>
            
                                                <div class="rating">
                                                    <ion-icon name="star"></ion-icon>
            
                                                    <data>1.3</data>
                                                </div>
            
                                            </div>
            
            
                                        </div>
                                    </li>
            
                                    <li>
                                        <div class="movie-card">
            
                                            <a href="movie-details.html">
                                                <figure class="card-banner">
                                                    <img src="https://www.anitube.site/wp-content/uploads/Baby-Steps.jpg" alt="Bleach">
                                                </figure>
                                            </a>
            
                                            <div class="title-wrapper">
                                                <a href="movie-details.html">
                                                    <h3 class="card-title">Baby Steps – Todos os Episódios</h3>
                                                </a>
            
                                                <time datetime="2014">2014</time>
                                            </div>
            
                                            <div class="card-meta">
                                                <div class="badge badge-outline">SD</div>
            
                                                <div class="duration">
                                                    <ion-icon name="time-outline"></ion-icon>
            
                                                    <time datetime="PT137M">NA</time>
                                                </div>
            
                                                <div class="rating">
                                                    <ion-icon name="star"></ion-icon>
            
                                                    <data>5.0</data>
                                                </div>
            
                                            </div>
            
            
                                        </div>
                                    </li>
            
                                    <li>
                                        <div class="movie-card">
            
                                            <a href="movie-details.html">
                                                <figure class="card-banner">
                                                    <img src="https://www.anitube.site/wp-content/uploads/Baby-Steps-2.jpg" alt="Bleach">
                                                </figure>
                                            </a>
            
                                            <div class="title-wrapper">
                                                <a href="movie-details.html">
                                                    <h3 class="card-title">Baby Steps 2 – Todos os Episódios</h3>
                                                </a>
            
                                                <time datetime="2014">2014</time>
                                            </div>
            
                                            <div class="card-meta">
                                                <div class="badge badge-outline">SD</div>
            
                                                <div class="duration">
                                                    <ion-icon name="time-outline"></ion-icon>
            
                                                    <time datetime="PT137M">NA</time>
                                                </div>
            
                                                <div class="rating">
                                                    <ion-icon name="star"></ion-icon>
            
                                                    <data>2.5</data>
                                                </div>
            
                                            </div>
            
            
                                        </div>
                                    </li>
            
                                    <li>
                                        <div class="movie-card">
            
                                            <a href="movie-details.html">
                                                <figure class="card-banner">
                                                    <img src="https://www.anitube.site/wp-content/uploads/Babylon-Todos-os-Episódios.jpg" alt="Bleach">
                                                </figure>
                                            </a>
            
                                            <div class="title-wrapper">
                                                <a href="movie-details.html">
                                                    <h3 class="card-title">Babylon – Todos os Episódios</h3>
                                                </a>
            
                                                <time datetime="2019">2019</time>
                                            </div>
            
                                            <div class="card-meta">
                                                <div class="badge badge-outline">HD</div>
            
                                                <div class="duration">
                                                    <ion-icon name="time-outline"></ion-icon>
            
                                                    <time datetime="PT137M">NA</time>
                                                </div>
            
                                                <div class="rating">
                                                    <ion-icon name="star"></ion-icon>
            
                                                    <data>1.0</data>
                                                </div>
            
                                            </div>
            
            
                                        </div>
                                    </li>
            
                                    <li>
                                        <div class="movie-card">
            
                                            <a href="movie-details.html">
                                                <figure class="card-banner">
                                                    <img src="https://www.anitube.site/wp-content/uploads/Baccano.jpg" alt="Bleach">
                                                </figure>
                                            </a>
            
                                            <div class="title-wrapper">
                                                <a href="movie-details.html">
                                                    <h3 class="card-title">Baccano – Todos os Episódios</h3>
                                                </a>
            
                                                <time datetime="2007">2007</time>
                                            </div>
            
                                            <div class="card-meta">
                                                <div class="badge badge-outline">HD</div>
            
                                                <div class="duration">
                                                    <ion-icon name="time-outline"></ion-icon>
            
                                                    <time datetime="PT137M">NA</time>
                                                </div>
            
                                                <div class="rating">
                                                    <ion-icon name="star"></ion-icon>
            
                                                    <data>1.3</data>
                                                </div>
            
                                            </div>
            
            
                                        </div>
                                    </li>
            
                                    <li>
                                        <div class="movie-card">
            
                                            <a href="movie-details.html">
                                                <figure class="card-banner">
                                                    <img src="https://www.anitube.site/wp-content/uploads/Back-Arrow-Todos-os-Episódios-AniTube.jpg" alt="Bleach">
                                                </figure>
                                            </a>
            
                                            <div class="title-wrapper">
                                                <a href="movie-details.html">
                                                    <h3 class="card-title">Back Arrow – Todos os Episódios</h3>
                                                </a>
            
                                                <time datetime="2021">2021</time>
                                            </div>
            
                                            <div class="card-meta">
                                                <div class="badge badge-outline">HD</div>
            
                                                <div class="duration">
                                                    <ion-icon name="time-outline"></ion-icon>
            
                                                    <time datetime="PT137M">NA</time>
                                                </div>
            
                                                <div class="rating">
                                                    <ion-icon name="star"></ion-icon>
            
                                                    <data>2.4</data>
                                                </div>
            
                                            </div>
            
            
                                        </div>
                                    </li>
            
                                    <li>
                                        <div class="movie-card">
            
                                            <a href="movie-details.html">
                                                <figure class="card-banner">
                                                    <img src="https://www.anitube.site/wp-content/uploads/Back-Street-Girls-Gokudolls.jpg" alt="Bleach">
                                                </figure>
                                            </a>
            
                                            <div class="title-wrapper">
                                                <a href="movie-details.html">
                                                    <h3 class="card-title">Back Street Girls: Gokudolls – Todos os Episódios</h3>
                                                </a>
            
                                                <time datetime="2018">2018</time>
                                            </div>
            
                                            <div class="card-meta">
                                                <div class="badge badge-outline">HD</div>
            
                                                <div class="duration">
                                                    <ion-icon name="time-outline"></ion-icon>
            
                                                    <time datetime="PT137M">NA</time>
                                                </div>
            
                                                <div class="rating">
                                                    <ion-icon name="star"></ion-icon>
            
                                                    <data>0.9</data>
                                                </div>
            
                                            </div>
            
            
                                        </div>
                                    </li>
            
                                    <li>
                                        <div class="movie-card">
            
                                            <a href="movie-details.html">
                                                <figure class="card-banner">
                                                    <img src="https://www.anitube.site/wp-content/uploads/Baka-to-Test-to-Shoukanjuu.jpg" alt="Bleach">
                                                </figure>
                                            </a>
            
                                            <div class="title-wrapper">
                                                <a href="movie-details.html">
                                                    <h3 class="card-title">Baka to Test to Shoukanjuu – Todos os Episódios</h3>
                                                </a>
            
                                                <time datetime="2010">2010</time>
                                            </div>
            
                                            <div class="card-meta">
                                                <div class="badge badge-outline">SD</div>
            
                                                <div class="duration">
                                                    <ion-icon name="time-outline"></ion-icon>
            
                                                    <time datetime="PT137M">NA</time>
                                                </div>
            
                                                <div class="rating">
                                                    <ion-icon name="star"></ion-icon>
            
                                                    <data>2.3</data>
                                                </div>
            
                                            </div>
            
            
                                        </div>
                                    </li>
            
                                    <li>
                                        <div class="movie-card">
            
                                            <a href="movie-details.html">
                                                <figure class="card-banner">
                                                    <img src="https://www.anitube.site/wp-content/uploads/Baka-to-Test-to-Shoukanjuu-Ni-2-ff.jpg" alt="Bleach">
                                                </figure>
                                            </a>
            
                                            <div class="title-wrapper">
                                                <a href="movie-details.html">
                                                    <h3 class="card-title">Baka to Test to Shoukanjuu Ni – [2° Temporada] – Todos os Episódios</h3>
                                                </a>
            
                                                <time datetime="2011">2011</time>
                                            </div>
            
                                            <div class="card-meta">
                                                <div class="badge badge-outline">SD</div>
            
                                                <div class="duration">
                                                    <ion-icon name="time-outline"></ion-icon>
            
                                                    <time datetime="PT137M">NA</time>
                                                </div>
            
                                                <div class="rating">
                                                    <ion-icon name="star"></ion-icon>
            
                                                    <data>1.7</data>
                                                </div>
            
                                            </div>
            
            
                                        </div>
                                    </li>
            
                                    <li>
                                        <div class="movie-card">
            
                                            <a href="movie-details.html">
                                                <figure class="card-banner">
                                                    <img src="https://www.anitube.site/wp-content/uploads/bakemonogatari-2470.jpg" alt="Bleach">
                                                </figure>
                                            </a>
            
                                            <div class="title-wrapper">
                                                <a href="movie-details.html">
                                                    <h3 class="card-title">Bakemonogatari – Todos os Episódios</h3>
                                                </a>
            
                                                <time datetime="2009">2009</time>
                                            </div>
            
                                            <div class="card-meta">
                                                <div class="badge badge-outline">SD</div>
            
                                                <div class="duration">
                                                    <ion-icon name="time-outline"></ion-icon>
            
                                                    <time datetime="PT137M">NA</time>
                                                </div>
            
                                                <div class="rating">
                                                    <ion-icon name="star"></ion-icon>
            
                                                    <data>1.5</data>
                                                </div>
            
                                            </div>
            
            
                                        </div>
                                    </li>
            
                                    <li>
                                        <div class="movie-card">
            
                                            <a href="movie-details.html">
                                                <figure class="card-banner">
                                                    <img src="https://www.anitube.site/wp-content/uploads/Baki.jpg" alt="Bleach">
                                                </figure>
                                            </a>
            
                                            <div class="title-wrapper">
                                                <a href="movie-details.html">
                                                    <h3 class="card-title">Baki (2018) – Todos os Episódios</h3>
                                                </a>
            
                                                <time datetime="2018">2018</time>
                                            </div>
            
                                            <div class="card-meta">
                                                <div class="badge badge-outline">HD</div>
            
                                                <div class="duration">
                                                    <ion-icon name="time-outline"></ion-icon>
            
                                                    <time datetime="PT137M">NA</time>
                                                </div>
            
                                                <div class="rating">
                                                    <ion-icon name="star"></ion-icon>
            
                                                    <data>8.6</data>
                                                </div>
            
                                            </div>
            
            
                                        </div>
                                    </li>
            
                                    <li>
                                        <div class="movie-card">
            
                                            <a href="movie-details.html">
                                                <figure class="card-banner">
                                                    <img src="https://www.anitube.site/wp-content/uploads/Baki-2-Temporada-Todos-os-Episódios-AniTube.jpg" alt="Bleach">
                                                </figure>
                                            </a>
            
                                            <div class="title-wrapper">
                                                <a href="movie-details.html">
                                                    <h3 class="card-title">Baki 2 – Todos os Episódios</h3>
                                                </a>
            
                                                <time datetime="2020">2020</time>
                                            </div>
            
                                            <div class="card-meta">
                                                <div class="badge badge-outline">HD</div>
            
                                                <div class="duration">
                                                    <ion-icon name="time-outline"></ion-icon>
            
                                                    <time datetime="PT137M">NA</time>
                                                </div>
            
                                                <div class="rating">
                                                    <ion-icon name="star"></ion-icon>
            
                                                    <data>7.1</data>
                                                </div>
            
                                            </div>
            
            
                                        </div>
                                    </li>
            
                                    <li>
                                        <div class="movie-card">
            
                                            <a href="movie-details.html">
                                                <figure class="card-banner">
                                                    <img src="https://www.anitube.site/wp-content/uploads/Baki-the-Grappler.jpg" alt="Bleach">
                                                </figure>
                                            </a>
            
                                            <div class="title-wrapper">
                                                <a href="movie-details.html">
                                                    <h3 class="card-title">Baki the Grappler – Todos os Episódios</h3>
                                                </a>
            
                                                <time datetime="2001">2001</time>
                                            </div>
            
                                            <div class="card-meta">
                                                <div class="badge badge-outline">SD</div>
            
                                                <div class="duration">
                                                    <ion-icon name="time-outline"></ion-icon>
            
                                                    <time datetime="PT137M">NA</time>
                                                </div>
            
                                                <div class="rating">
                                                    <ion-icon name="star"></ion-icon>
            
                                                    <data>4.4</data>
                                                </div>
            
                                            </div>
            
            
                                        </div>
                                    </li>
            
                                </ul>
            
                            </div>
                        </section>
                    </div>
                </section>
    `;

    container.innerHTML = template;

    return container 
}