export interface Album {
    id: string;
    images: Image[];
    name: string;
    type: 'album'
}


export interface Image {
    url: string;
    height: number;
    width: number;
}


export const mockAlbums: Album[] = [
    {
        id: "1",
        images: [
            {
                url: "https://example.com/image1.jpg",
                height: 800,
                width: 1200
            }
        ],
        name: "Album 1",
        type: "album"
    },
    {
        id: "2",
        images: [
            {
                url: "https://example.com/image2.jpg",
                height: 900,
                width: 1600
            }
        ],
        name: "Album 2",
        type: "album"
    },
    {
        id: "3",
        images: [
            {
                url: "https://example.com/image3.jpg",
                height: 700,
                width: 1000
            }
        ],
        name: "Album 3",
        type: "album"
    },
    { id: "4", images: [{ url: "https://example.com/image4.jpg", height: 600, width: 800 }], name: "Album 4", type: "album" }
];