<script
                    src="https://code.jquery.com/jquery-3.7.1.min.js"
                    integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
                    crossorigin="anonymous">
                </script>
                <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
                <script>
                    var typed = new Typed(".auto-input",{
                        strings: ["Jamie", "a Software Engineer", "a second year university student"],
                        typeSpeed:100,
                        backSpeed:100,
                        loop: true
                    })
                </script>
                <script>
                    var carouselWidth = $(".carousel-inner")[0].scrollWidth;
                    var cardWidth = $(".carousel-item").width();
                    var scrollPosition = 0;

                    $(".carousel-control-next").on("click", function () {
                        if (scrollPosition < (carouselWidth - cardWidth * 4)) {  
                            scrollPosition += cardWidth;  
                            $(".carousel-inner").animate({ scrollLeft: scrollPosition },
                            600)
                            ; 
                        }
                    });

                    $(".carousel-control-prev").on("click", function () {
                        if (scrollPosition > 0) {
                            scrollPosition -= cardWidth;
                            $(".carousel-inner").animate(
                                { scrollLeft: scrollPosition },
                                600
                            );
                        }
                    });
                </script>
                <script>
                    function emailCopy(){
                        var email="jwats018@uottawa.ca";
                        navigator.clipboard.writeText(email);
                        alert("Copied email: " + email);
                    }
                </script>