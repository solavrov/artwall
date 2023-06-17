import HashMap "mo:base/HashMap";
import Nat "mo:base/Nat";
import Hash "mo:base/Hash";
import Iter "mo:base/Iter";
import Nat32 "mo:base/Nat32";
import Buffer "mo:base/Buffer";
import Array "mo:base/Array";

actor Gallery {

    stable var n : Nat = 0; // number of pictures in gallery
    stable var entries : [(Nat, Text)] = []; //array for preupgrade-postupgrade

    private func _hash(x : Nat) : Nat32 {
        return Nat32.fromNat(x % 4_294_967_296);
    };

    let gallery = HashMap.HashMap<Nat, Text>(0, Nat.equal, _hash); //gallery

    public func putToGallery(pix : Text) : async () {
        gallery.put(n, pix);
        n += 1;
    };

    public query func getGallery() : async [Text] {
        return Iter.toArray(gallery.vals());
    };

    public query func getPicture(k : Nat) : async ?Text {
        return gallery.get(k - 1);
    };

    public query func getSize() : async Nat {
        return n;
    };

    // return block (part of the gallery) under number blockNum (1, 2, 3...) from the gallery that has blockSize pictures
    // if the block is the last (tail of the gallery) append "END" at the end of the array
    public query func getBlock(blockNum : Nat, blockSize : Nat) : async [Text] {
        if (blockNum == 0) {
            return ["END"];
        };
        var isTail : Bool = false;
        let start : Nat = (blockNum - 1) * blockSize;
        var end : Nat = start + blockSize - 1;
        if (start >= n) {
            return ["END"];
        } else if (end + 1 >= n) {
            end := n - 1;
            isTail := true;
        };
        let gal = Iter.toArray(gallery.vals());
        let buff = Buffer.Buffer<Text>(0);
        let iter = Iter.range(start, end);
        for (i in iter) {
            buff.add(gal[n + i - start - end  - 1]);
        };
        if (isTail) {
            buff.add("END");
        };
        return Buffer.toArray<Text>(buff);
    };

    system func preupgrade() {
        entries := Iter.toArray(gallery.entries());
    };

    system func postupgrade() {
        for ((num, pix) in entries.vals()) {
            gallery.put(num, pix);
        };
        entries := [];
    };

};
