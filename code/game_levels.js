var GAME_LEVELS = [
  ["                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                           o o                                  ",
   "                o o                      xxxxxxx                                ",
   "              xxxxxxx                                                           ",
   "                                                                                ",
   "    @                                 o                                         ",
   "   xxxx                          o   xxx          o o                           ",
   "         o               o  o   xxx              xxxxx     o o                  ",
   "        xxxx            xxxxxx                            xxxxx                 ",
   "  x            o o o o                   x        o o                           ",
   "  x           xxxxxxxxx                  x       xxxxxx                         ",
   "  x                                      x                                      ",
   "  x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x               o o                    ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx              xxxxx                   ",
   "                                                                                ",
   "                                             o                  o o             ",
   "                                            xxx!!!!!!!!x       xxxxx            ",
   "                    o o                       xxxxxxxxxx                        ",
   "                   xxxxxx               o o o                                   ",
   "                               o o o   xxxxxxx            yy         yy         ",
   "       x                      xxxxxxxx                   yyyyy   yyyyyyy        ",
   "       x        o o o o o                             yyyyyyyyyyyyyyyyyyyy      ",
   "       x      xxxxxxxxxxxx                          yyyyyyyyyyy yyyyyyyy        ",
   "       x                                               yyyyy        yyy         ",
   "       x                            o o o                                       ",
   "   o   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                                     ",
   "  xxx                                                                           ",
   "                                                                                ",],
  ["                                      x!!x                        xxxxxxx                                    x!x  ",
   "                                      x!!x                     xxxx     xxxx                                 x!x  ",
   "                                      x!!xxxxxxxxxx           xx           xx                                x!x  ",
   "                                      xx!!!!!!!!!!xx         xx             xx                               x!x  ",
   "                                       xxxxxxxxxx!!x         x                                    o   o   o  x!x  ",
   "                                                xx!x         x     o   o                                    xx!x  ",
   "                                                 x!x         x                                xxxxxxxxxxxxxxx!!x  ",
   "                                                 xvx         x     x   x                        !!!!!!!!!!!!!!xx  ",
   "                                                             xx  |   |   |  xx            xxxxxxxxxxxxxxxxxxxxx   ",
   "                                                              xx!!!!!!!!!!!xx            v                        ",
   "                                                               xxxx!!!!!xxxx                                      ",
   "                                               x     x            xxxxxxx        xxx         xxx                  ",
   "                                               x     x                           x x         x x                  ",
   "                                               x     x                             x         x                    ",
   "                                               x     x                             xx        x                    ",
   "                                               xx    x                             x         x                    ",
   "                                               x     x      o  o     x   x         x         x                    ",
   "               xxxxxxx        xxx   xxx        x     x               x   x         x         x                    ",
   "              xx     xx         x   x          x     x     xxxxxx    x   x   xxxxxxxxx       x                    ",
   "             xx       xx        x o x          x    xx               x   x   x               x                    ",
   "     @       x         x        x   x          x     x               x   x   x               x                    ",
   "    xxx      x         x        x   x          x     x               x   xxxxx   xxxxxx      x                    ",
   "    x x      x         x       xx o xx         x     x               x     o     x x         x                    ",
   "!!!!x x!!!!!!x         x!!!!!!xx     xx!!!!!!!!xx    x!!!!!!!!!!     x     =     x x         x                    ",
   "!!!!x x!!!!!!x         x!!!!!xx       xxxxxxxxxx     x!!!!!!!xx!     xxxxxxxxxxxxx xx  o o  xx                    ",
   "!!!!x x!!!!!!x         x!!!!!x    o                 xx!!!!!!xx !                    xx     xx                     ",
   "!!!!x x!!!!!!x         x!!!!!x                     xx!!!!!!xx  !                     xxxxxxx                      ",
   "!!!!x x!!!!!!x         x!!!!!xx       xxxxxxxxxxxxxx!!!!!!xx   !                                                  ",
   "!!!!x x!!!!!!x         x!!!!!!xxxxxxxxx!!!!!!!!!!!!!!!!!!xx    !                                                  ",
   "!!!!x x!!!!!!x         x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xx     !                                                  "],
  ["                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                        o                                                                     ",
   "                                                                                                              ",
   "                                        x                                                                     ",
   "                                        x                                                                     ",
   "                                        x                                                                     ",
   "                                        x                                                                     ",
   "                                       xxx                                                                    ",
   "                                       x x                 !!!        !!!  xxx                                ",
   "                                       x x                 !x!        !x!                                     ",
   "                                     xxx xxx                x          x                                      ",
   "                                      x   x                 x   oooo   x       xxx                            ",
   "                                      x   x                 x          x      x!!!x                           ",
   "                                      x   x                 xxxxxxxxxxxx       xxx                            ",
   "                                     xx   xx      x   x      x                                                ",
   "                                      x   xxxxxxxxx   xxxxxxxx              x x                               ",
   "                                      x   x           x                    x!!!x                              ",
   "                                      x   x           x                     xxx                               ",
   "                                     xx   xx          x                                                       ",
   "                                      x   x= = = =    x            xxx                                        ",
   "                                      x   x           x           x!!!x                                       ",
   "                                      x   x    = = = =x     o      xxx       xxx                              ",
   "                                     xx   xx          x                     x!!!x                             ",
   "                              o   o   x   x           x     x                xxv        xxx                   ",
   "                                      x   x           x              x                 x!!!x                  ",
   "                             xxx xxx xxx xxx     o o  x!!!!!!!!!!!!!!x                   vx                   ",
   "                             x xxx x x xxx x          x!!!!!!!!!!!!!!x                                        ",
   "                             x             x   xxxxxxxxxxxxxxxxxxxxxxx                                        ",
   "                             xx           xx                                         xxx                      ",
   "  xxx                         x     x     x                                         x!!!x                xxx  ",
   "  x x                         x    xxx    x                                          xxx                 x x  ",
   "  x                           x    xxx    xxxxxxx                        xxxxx                             x  ",
   "  x                           x           x                              x   x                             x  ",
   "  x                           xx          x                              x x x                             x  ",
   "  x                                       x       |xxxx|    |xxxx|     xxx xxx                             x  ",
   "  x                xxx             o o    x                              x         xxx                     x  ",
   "  x               xxxxx       xx          x                             xxx       x!!!x          x         x  ",
   "  x               oxxxo       x    xxx    x                             x x        xxx          xxx        x  ",
   "  x                xxx        xxxxxxxxxxxxx  x oo x    x oo x    x oo  xx xx                    xxx        x  ",
   "  x      @          x         x           x!!x    x!!!!x    x!!!!x    xx   xx                    x         x  ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxx           xxxxxxxxxxxxxxxxxxxxxxxxxxxxx     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
   "                                                                                                              ",
   "                                                                                                              "],
  ["                                                                                                  xxx x       ",
   "                                                                                                      x       ",
   "                                                                                                  xxxxx       ",
   "                                                                                                  x           ",
   "                                                                                                  x xxx       ",
   "                          o                                                                       x x x       ",
   "                                                                                             o o oxxx x       ",
   "                   xxx                                                                                x       ",
   "       !  o  !                                                xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx       ",
   "       x     x                                                x   x x   x x   x x   x x   x x   x x           ",
   "       x= o  x            x                                   xxx x xxx x xxx x xxx x xxx x xxx x xxxxx       ",
   "       x     x                                                  x x   x x   x x   x x   x x   x x     x       ",
   "       !  o  !            o                                  xxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxxxx       ",
   "                                                                                                              ",
   "          o              xxx                              xx                                                  ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                      xx                                                      ",
   "                   xxx         xxx                                                                            ",
   "                                                                                                              ",
   "                          o                                                     x      x                      ",
   "                                                          xx     xx                                           ",
   "             xxx         xxx         xxx                                 x                  x                 ",
   "                                                                                                              ",
   "                                                                 ||                                           ",
   "  xxxxxxxxxxx                                                                                                 ",
   "  x         x o xxxxxxxxx o xxxxxxxxx o xx                                                x                   ",
   "  x         x   x       x   x       x   x                 ||                  x     x                         ",
   "  x  @      xxxxx   o   xxxxx   o   xxxxx                                                                     ",
   "  xxxxxxx                                     xxxxx       xx     xx     xxx                                   ",
   "        x=                  =                =x   x                     xxx                                   ",
   "        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   x!!!!!!!!!!!!!!!!!!!!!xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "                                                  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                                                                              "]
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
