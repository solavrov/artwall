import HashMap "mo:base/HashMap";
import Nat "mo:base/Nat";
import Hash "mo:base/Hash";
import Iter "mo:base/Iter";
import Nat32 "mo:base/Nat32";

actor Gallery {

    stable var n : Nat = 0;
    stable var entries : [(Nat, Text)] = [];

    private func _hash(x : Nat) : Nat32 {
        return Nat32.fromNat(x % 4_294_967_296);
    };

    let gallery = HashMap.HashMap<Nat, Text>(0, Nat.equal, _hash);

    public func putToGallery(pix : Text) : async () {
        gallery.put(n, pix);
        n += 1;
    };

    public query func getGallery() : async [Text] {
        return Iter.toArray(gallery.vals());
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
