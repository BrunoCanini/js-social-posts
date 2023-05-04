const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

const containerGeneral = document.getElementById("container")

function createDivAppend(containerPadre, classi, content=undefined){
    const container = document.createElement("div");
    container.classList.add(...classi);
    if( content !== undefined ){
        container.textContent = content
    }
    containerPadre.append(container);
    return container;
}

function createImgAppend(containerPadre, classe, imgSource){
    const container = document.createElement("img");
    container.classList.add(classe);
    container.src = imgSource;
    containerPadre.append(container);
}

for (let i = 0; i < posts.length; i++) {
    const element = posts[i];

    const containerPost = createDivAppend(containerGeneral , ["post"]);

    // creazione post header
    const postHeaderJs = createDivAppend(containerPost , ["post__header"]);

    const childHeader = createDivAppend(postHeaderJs , ["post-meta__icon"]);

    createImgAppend(childHeader, "profile-pic", element.author.image);

    const secondChildHeader = createDivAppend(childHeader,["post-meta__data"]);

    const childSecondChildHeader = createDivAppend(secondChildHeader, ["post-meta__author"], element.author.name);

    let secondChildSecondChildHeader = document.createElement("div");
    secondChildSecondChildHeader.classList.add("post-meta__time");
    secondChildSecondChildHeader.textContent = `${element.created}`;
    secondChildHeader.append(secondChildSecondChildHeader);

    // creazione post text
    let postTextJs = document.createElement("div");
    postTextJs.classList.add("post__text");
    postTextJs.textContent = `${element.content}`;
    containerPost.append(postTextJs);

    // creazione post image
    let containerImage = document.createElement("div");
    containerImage.classList.add("post__image");
    containerPost.append(containerImage);

    let postImage = document.createElement("img");
    postImage.src = `${element.media}`;
    containerImage.append(postImage);

    // creazione post footer
    let containerFooterJs = document.createElement("div");
    containerFooterJs.classList.add("post__footer");
    containerPost.append(containerFooterJs);

    let childFooter = document.createElement("div");
    childFooter.classList.add("likes");
    childFooter.classList.add("js-likes");
    containerFooterJs.append(childFooter);

    const childChildFooter = document.createElement("div");
    childChildFooter.classList.add("likes__cta");
    childFooter.append(childChildFooter);

    const linkFooter = document.createElement("a");
    linkFooter.classList.add("like-button");
    linkFooter.classList.add("js-like-button");
    childChildFooter.append(linkFooter);

    const picLike = document.createElement("i");
    picLike.classList.add("like-button__icon");
    picLike.classList.add("fas");
    picLike.classList.add("fa-thumbs-up");
    linkFooter.append(picLike);

    let textLike = document.createElement("span");
    textLike.classList.add("like-button__label");
    textLike.textContent = " Mi Piace"
    linkFooter.append(textLike);

    let counterLike = document.createElement("div");
    counterLike.classList.add("likes__counter");
    counterLike.textContent = "Piace a ";
    childFooter.append(counterLike);

    let numberLike = document.createElement("b");
    numberLike.classList.add("js-likes-counter");
    numberLike.textContent = element.likes;
    counterLike.append(numberLike);

    // reattività bottone like
    childChildFooter.addEventListener ("click" , function () {
        if( parseInt(numberLike.textContent) === element.likes){
            numberLike.textContent++;
        }
    });

};

