    
    c: "custom",
    custom: function(target, room, user) {
        if (!user.isDev() || !target) return false;
        if (target.indexOf("[") === 0 && target.indexOf("]") > 1) {
            let targetRoomId = toId(target.split("[")[1].split("]")[0], true);
            if (!Rooms.rooms.has(targetRoomId)) return this.send("I am not in the room you specified.");
            this.room = Rooms.get(target.split("[")[1].split("]")[0]);
            target = target.split("]").slice(1).join("]").trim();
        }
        if (!target) return false;
        this.send(target);
    },
    
