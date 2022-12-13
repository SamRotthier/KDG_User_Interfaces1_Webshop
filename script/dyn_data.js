const Categories = [{Id:1,Category:"Dinos"}, {Id:2,Category:"Animals"}, {Id:3,Category:"Fantasy"}]

const Products =[
        {Name: 'Trex',
            Description: '\'This is a hand drawn illustration of a Trex.\\n\' +\n' +
                '                \'It is from the poker card set jurassic Downfall.\'',
            Image: '../media/Product_Listing_Pictures/trex.png',
            Instructions: 'To apply the sticker in a good manner, you first have to find the place where you want to put it.\n' +
                'Then remove the backing of the sticker and place it carefully on the selected place.\n' +
                'After that you should press well on it for a few seconds and squeeze the remaining air out of it.\n' +
                'Now you are all set!',
            Price:'10$',
            Link:'ProductDetailsPageTrex.html',
            Size:'5inch',
            Id:1
        },
        {Name: 'Trex Skeleton',
            Description: '\'This is a hand drawn illustration of a Trex Skeleton.\\n\' +\n' +
                '                \'It is from the poker card set jurassic Downfall.\'',
            Image: '../media/Product_Listing_Pictures/trex_skeleton.png',
            Instructions: 'To apply the sticker in a good manner, you first have to find the place where you want to put it.\n' +
                'Then remove the backing of the sticker and place it carefully on the selected place.\n' +
                'After that you should press well on it for a few seconds and squeeze the remaining air out of it.\n' +
                'Now you are all set!',
            Price:'10$',
            Link:'ProductDetailsPageTrexSkeleton.html',
            Size:'10inch',
            Id:1
        },
        {Name: 'Raptor',
            Description: 'This is a hand drawn illustration of a Raptor.\n' +
                'It is from the poker card set jurassic Downfall.',
            Image: '../media/Product_Listing_Pictures/raptor.png',
            Instructions: 'To apply the sticker in a good manner, you first have to find the place where you want to put it.\n' +
                'Then remove the backing of the sticker and place it carefully on the selected place.\n' +
                'After that you should press well on it for a few seconds and squeeze the remaining air out of it.\n' +
                'Now you are all set!',
            Price:'30$',
            Link:'ProductDetailsPageRaptor.html',
            Size:'15inch',
            Id:1
        },
        {Name: 'Raptor Skeleton',
            Description: '\'This is a hand drawn illustration of a Raptor Skeleton.\\n\' +\n' +
                '                \'It is from the poker card set jurassic Downfall.\'',
            Image: '../media/Product_Listing_Pictures/raptor_skeleton.png',
            Instructions: 'To apply the sticker in a good manner, you first have to find the place where you want to put it.\n' +
                'Then remove the backing of the sticker and place it carefully on the selected place.\n' +
                'After that you should press well on it for a few seconds and squeeze the remaining air out of it.\n' +
                'Now you are all set!',
            Price:'10$',
            Link:'',
            Size:'5inch',
            Id:1
        },
        {Name: 'Therizinosaurus',
            Description: '\'This is a hand drawn illustration of a Therizinosaurus.\\n\' +\n' +
                '                \'It is from the poker card set jurassic Downfall.\'',
            Image: '../media/Product_Listing_Pictures/therizinosaurus.png',
            Instructions: 'To apply the sticker in a good manner, you first have to find the place where you want to put it.\n' +
                'Then remove the backing of the sticker and place it carefully on the selected place.\n' +
                'After that you should press well on it for a few seconds and squeeze the remaining air out of it.\n' +
                'Now you are all set!',
            Price:'10$',
            Link:'',
            Size:'20inch',
            Id:1
        },
        {Name: 'Therizonosaurus 2',
            Description: '\'This is a hand drawn illustration of a Therizinosaurus.\\n\' +\n' +
                '                \'It is from the poker card set jurassic Downfall.\'',
            Image: '../media/Product_Listing_Pictures/Dino_Design_PSD.png',
            Instructions: 'To apply the sticker in a good manner, you first have to find the place where you want to put it.\n' +
                'Then remove the backing of the sticker and place it carefully on the selected place.\n' +
                'After that you should press well on it for a few seconds and squeeze the remaining air out of it.\n' +
                'Now you are all set!',
            Price:'10$',
            Link:'',
            Size:'20inch',
            Id:1
        },
        {Name: 'Therizinosaurus Skeleton',
            Description: '\'This is a hand drawn illustration of a Therizinosaurus Skeleton.\\n\' +\n' +
                '                \'It is from the poker card set jurassic Downfall.\'',
            Image: '../media/Product_Listing_Pictures/therizinosaurus_skeleton.png',
            Instructions: 'To apply the sticker in a good manner, you first have to find the place where you want to put it.\n' +
                'Then remove the backing of the sticker and place it carefully on the selected place.\n' +
                'After that you should press well on it for a few seconds and squeeze the remaining air out of it.\n' +
                'Now you are all set!',
            Price:'10$',
            Link:'',
            Size:'5inch',
            Id:1
        },
        {Name: 'Mosasaurus',
            Description: '\'This is a hand drawn illustration of a Mosasaurus.\\n\' +\n' +
                '                \'It is from the poker card set jurassic Downfall.\'',
            Image: '../media/Product_Listing_Pictures/mosasaurus.png',
            Instructions: 'To apply the sticker in a good manner, you first have to find the place where you want to put it.\n' +
                'Then remove the backing of the sticker and place it carefully on the selected place.\n' +
                'After that you should press well on it for a few seconds and squeeze the remaining air out of it.\n' +
                'Now you are all set!',
            Price:'10$',
            Link:'',
            Size:'5inch',
            Id:1
        },
        {Name: 'Mosasaurus_Skeleton',
            Description: '\'This is a hand drawn illustration of a Mosasaurus Skeleton.\\n\' +\n' +
                '                \'It is from the poker card set jurassic Downfall.\'',
            Image: '../media/Product_Listing_Pictures/mosasaurus_skeleton.png',
            Instructions: 'To apply the sticker in a good manner, you first have to find the place where you want to put it.\n' +
                'Then remove the backing of the sticker and place it carefully on the selected place.\n' +
                'After that you should press well on it for a few seconds and squeeze the remaining air out of it.\n' +
                'Now you are all set!',
            Price:'10$',
            Link:'',
            Size:'5inch',
            Id:1
        },
        {Name: 'Carnotaurus',
            Description: '\'This is a hand drawn illustration of a Carnotaurus.\\n\' +\n' +
                '                \'It is from the poker card set jurassic Downfall.\'',
            Image: '../media/Product_Listing_Pictures/king_of_hearts_carnotaurus.png',
            Instructions: 'To apply the sticker in a good manner, you first have to find the place where you want to put it.\n' +
                'Then remove the backing of the sticker and place it carefully on the selected place.\n' +
                'After that you should press well on it for a few seconds and squeeze the remaining air out of it.\n' +
                'Now you are all set!',
            Price:'10$',
            Link:'',
            Size:'5inch',
            Id:1
        },
        {Name: 'Elephant',
            Description: '\'This is an illustration of an Elephant.\'',
            Image: '../media/Product_Listing_Pictures/Elephant_Realistic.png',
            Instructions: 'To apply the sticker in a good manner, you first have to find the place where you want to put it.\n' +
                'Then remove the backing of the sticker and place it carefully on the selected place.\n' +
                'After that you should press well on it for a few seconds and squeeze the remaining air out of it.\n' +
                'Now you are all set!',
            Price:'10$',
            Link:'',
            Size:'15inch',
            Id:2
        },
        {Name: 'Turtle',
            Description: '\'This is an illustration of a Turtle.\'',
            Image: '../media/Product_Listing_Pictures/Turtle_PNG.png',
            Instructions: 'To apply the sticker in a good manner, you first have to find the place where you want to put it.\n' +
                'Then remove the backing of the sticker and place it carefully on the selected place.\n' +
                'After that you should press well on it for a few seconds and squeeze the remaining air out of it.\n' +
                'Now you are all set!',
            Price:'10$',
            Link:'',
            Size:'5inch',
            Id:2
        },
        {Name: 'Axolotl',
            Description: '\'This is an illustration of an Axolotl.\'',
            Image: '../media/Product_Listing_Pictures/Axolotl_PNG.png',
            Instructions: 'To apply the sticker in a good manner, you first have to find the place where you want to put it.\n' +
                'Then remove the backing of the sticker and place it carefully on the selected place.\n' +
                'After that you should press well on it for a few seconds and squeeze the remaining air out of it.\n' +
                'Now you are all set!',
            Price:'10$',
            Link:'',
            Size:'20inch',
            Id:2
        },
        {Name: 'Elephant and Mother',
            Description: '\'This is an illustration of an Elephant and its mother.\'',
            Image: '../media/Product_Listing_Pictures/Mother_Child.png',
            Instructions: 'To apply the sticker in a good manner, you first have to find the place where you want to put it.\n' +
                'Then remove the backing of the sticker and place it carefully on the selected place.\n' +
                'After that you should press well on it for a few seconds and squeeze the remaining air out of it.\n' +
                'Now you are all set!',
            Price:'10$',
            Link:'',
            Size:'20inch',
            Id:2
        },
        {Name: 'Red Panda',
            Description: '\'This is an illustration of a Red Panda.\'',
            Image: '../media/Product_Listing_Pictures/RedPanda_PNG.png',
            Instructions: 'To apply the sticker in a good manner, you first have to find the place where you want to put it.\n' +
                'Then remove the backing of the sticker and place it carefully on the selected place.\n' +
                'After that you should press well on it for a few seconds and squeeze the remaining air out of it.\n' +
                'Now you are all set!',
            Price:'10$',
            Link:'',
            Size:'5inch',
            Id:2
        },
        {Name: 'Knight1',
            Description: '\'This is an illustration of a Knight.\'',
            Image: '../media/Product_Listing_Pictures/king_of_diamonds.png',
            Instructions: 'To apply the sticker in a good manner, you first have to find the place where you want to put it.\n' +
                'Then remove the backing of the sticker and place it carefully on the selected place.\n' +
                'After that you should press well on it for a few seconds and squeeze the remaining air out of it.\n' +
                'Now you are all set!',
            Price:'10$',
            Link:'',
            Size:'15inch',
            Id:3
        },
        {Name: 'Knight2',
            Description: '\'This is an illustration of a Knight.\'',
            Image: '../media/Product_Listing_Pictures/jack_of_clubs.png',
            Instructions: 'To apply the sticker in a good manner, you first have to find the place where you want to put it.\n' +
                'Then remove the backing of the sticker and place it carefully on the selected place.\n' +
                'After that you should press well on it for a few seconds and squeeze the remaining air out of it.\n' +
                'Now you are all set!',
            Price:'10$',
            Link:'',
            Size:'20inch',
            Id:3
        },
        {Name: 'Knight3',
            Description: '\'This is an illustration of a Knight.\'',
            Image: '../media/Product_Listing_Pictures/jack_diamonds.png',
            Instructions: 'To apply the sticker in a good manner, you first have to find the place where you want to put it.\n' +
                'Then remove the backing of the sticker and place it carefully on the selected place.\n' +
                'After that you should press well on it for a few seconds and squeeze the remaining air out of it.\n' +
                'Now you are all set!',
            Price:'10$',
            Link:'',
            Size:'5inch',
            Id:3
        },
        {Name: 'Knight4',
            Description: '\'This is an illustration of a Knight.\'',
            Image: '../media/Product_Listing_Pictures/queen_diamonds.png',
            Instructions: 'To apply the sticker in a good manner, you first have to find the place where you want to put it.\n' +
                'Then remove the backing of the sticker and place it carefully on the selected place.\n' +
                'After that you should press well on it for a few seconds and squeeze the remaining air out of it.\n' +
                'Now you are all set!',
            Price:'10$',
            Link:'',
            Size:'5inch',
            Id:3
        },
        {Name: 'Knight5',
            Description: '\'This is an illustration of a Knight.\'',
            Image: '../media/Product_Listing_Pictures/queen_hearts.png',
            Instructions: 'To apply the sticker in a good manner, you first have to find the place where you want to put it.\n' +
                'Then remove the backing of the sticker and place it carefully on the selected place.\n' +
                'After that you should press well on it for a few seconds and squeeze the remaining air out of it.\n' +
                'Now you are all set!',
            Price:'10$',
            Link:'',
            Size:'5inch',
            Id:3
        }

]