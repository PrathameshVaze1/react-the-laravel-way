import { Heart, LoaderCircle } from 'lucide-react';
import { Dispatch, SetStateAction, useState } from 'react';
import { toggleLikedByStatus } from '../queries';
import { Puppy } from '../types';

export function LikeToggle({
    puppy,
    setPuppies,
}: {
    puppy: Puppy;
    setPuppies: Dispatch<SetStateAction<Puppy[]>>;
}) {
    const [pending, setPending] = useState(false);
    return (
        <button
            className="group"
            onClick={async () => {
                setPending(true);
                const updatedPuppy = await toggleLikedByStatus(puppy.id);
                setPuppies((prevPups) => {
                    return prevPups.map((existingpuppy) =>
                        existingpuppy.id === updatedPuppy.id
                            ? updatedPuppy
                            : existingpuppy,
                    );
                });
                setPending(false);
            }}
        >
            {pending ? (
                <LoaderCircle className="animate-spin stroke-slate-300" />
            ) : (
                <Heart
                    className={
                        puppy.likedBy.includes(1)
                            ? 'fill-pink-500 stroke-none'
                            : 'stroke-slate-200 group-hover:stroke-slate-300'
                    }
                />
            )}
        </button>
    );
}
