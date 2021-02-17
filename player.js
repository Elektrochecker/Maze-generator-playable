function Player() {
    this.pos = [0, 0];
    this.color = playerColor;

    this.show = function (r) {
        fill(this.color);
        noStroke();
        ellipseMode(CENTER);
        circle(this.pos[0] * scl + scl / 2, this.pos[1] * scl + scl / 2, scl - r);
    }

    this.move = function (n) {
        switch (n) {
            case 0:
                if (cells[player.pos[1]][player.pos[0]][0] == false) {
                    this.pos[1]--;
                }
                break;
            case 1:
                if (cells[player.pos[1]][player.pos[0]][1] == false) {
                    this.pos[0]++;
                }
                break;
            case 2:
                if (cells[player.pos[1]][player.pos[0]][2] == false) {
                    this.pos[1]++;
                }
                break;
            case 3:
                if (cells[player.pos[1]][player.pos[0]][3] == false) {
                    this.pos[0]--;
                }
                break;
        }
    }
}

function keyPressed() {
    switch (keyCode) {
        case 37: // left
            if (player.pos[0] > 0) {
                player.move(3);
            }
            break;
        case 38: // up
            if (player.pos[1] > 0) {
                player.move(0);
            }
            break;
        case 39: // right
            if (player.pos[0] < width / scl - 1) {
                player.move(1);
            }
            break;
        case 40: // down
            if (player.pos[1] < height / scl - 1) {
                player.move(2);
            }
            break;


        case 65: // left
            if (player.pos[0] > 0) {
                player.move(3);
            }
            break;
        case 87: // up
            if (player.pos[1] > 0) {
                player.move(0);
            }
            break;
        case 68: // right
            if (player.pos[0] < width / scl - 1) {
                player.move(1);
            }
            break;
        case 83: // down
            if (player.pos[1] < height / scl - 1) {
                player.move(2);
            }
    }
}