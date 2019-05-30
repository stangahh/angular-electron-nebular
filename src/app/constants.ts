interface Social {
    title: string;
    url: string;
    classes: string;
}

const twitter: Social = {
    title: "twitter",
    url: "https://www.twitter.com",
    classes: "ion ion-social-twitter",
};

const facebook: Social = {
    title: "facebook",
    url: "https://www.facebook.com",
    classes: "ion ion-social-facebook",
};

const linkedIn: Social = {
    title: "linkedin",
    url: "https://www.linkedin.com",
    classes: "ion ion-social-linkedin",
};

const socials: Social[] = [twitter, facebook, linkedIn];

export {
    socials,
    Social,
}