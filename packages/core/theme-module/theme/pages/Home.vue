<template>
  <div id="home">
    <SfHero class="section">
      <SfHeroItem
        v-for="(hero, i) in heroes"
        :key="i"
        :title="hero.title"
        :subtitle="hero.subtitle"
        :button-text="hero.buttonText"
        :background="hero.background"
        :image="hero.image"
        :class="hero.className"
      ></SfHeroItem>
    </SfHero>
    <SfBannerGrid :banner-grid="1" class="section banner-grid">
      <template v-for="item in banners" v-slot:[item.slot]>
        <SfBanner
          :key="item.slot"
          :title="item.title"
          :subtitle="item.subtitle"
          :description="item.description"
          :button-text="item.buttonText"
          :image="item.image"
          :class="item.class"
        />
      </template>
    </SfBannerGrid>
    <SfCallToAction
      title="Subscribe to Newsletters"
      button-text="Subscribe"
      description="Be aware of upcoming sales and events. Receive gifts and special offers!"
      image="/homepage/newsletter.jpg"
      class="call-to-action"
    />
    <SfSection title-heading="Best Sellers" class="section">
      <SfCarousel class="product-carousel">
        <SfCarouselItem v-for="(product, i) in products" :key="i">
          <nuxt-link to="/p/philippemodel-sneakers-grey-red">
            <SfProductCard
              :title="product.title"
              :image="product.image"
              :regular-price="product.price.regular"
              :max-rating="product.rating.max"
              :score-rating="product.rating.score"
              :is-on-wishlist="product.isOnWishlist"
              class="product-card"
              @click:wishlist="toggleWishlist(i)"
            />
          </nuxt-link>
        </SfCarouselItem>
      </SfCarousel>
    </SfSection>
    <InstagramFeed />
    <SfBanner
      image="/homepage/bannerD.png"
      subtitle="Fashion to Take Away"
      title="Download our application to your mobile"
      class="sf-banner--left desktop-only banner-app"
    >
      <template #call-to-action>
        <div class="banner-app__call-to-action">
          <SfImage
            class="banner-app__image"
            src="/homepage/google.png"
            :width="191"
            :height="51"
            alt="Google Play"
          />
          <SfImage
            class="banner-app__image"
            src="/homepage/apple.png"
            :width="174"
            :height="57"
            alt="App Store"
          />
        </div>
      </template>
    </SfBanner>
  </div>
</template>
<script>
import {
  SfHero,
  SfBanner,
  SfCallToAction,
  SfSection,
  SfCarousel,
  SfProductCard,
  SfImage,
  SfBannerGrid
} from '@storefront-ui/vue';
import InstagramFeed from '~/components/InstagramFeed.vue';

export default {
  name: 'Home',
  components: {
    InstagramFeed,
    SfHero,
    SfBanner,
    SfCallToAction,
    SfSection,
    SfCarousel,
    SfProductCard,
    SfImage,
    SfBannerGrid
  },
  data() {
    return {
      heroes: [
        {
          title: 'Colorful summer dresses are already in store',
          subtitle: 'SUMMER COLLECTION 2019',
          buttonText: 'Learn more',
          background: '#eceff1',
          image: '/homepage/bannerH.jpg'
        },
        {
          title: 'Colorful summer dresses are already in store',
          subtitle: 'SUMMER COLLECTION 2019',
          buttonText: 'Learn more',
          background: '#efebe9',
          image: '/homepage/bannerA.jpg',
          className:
            'sf-hero-item--position-bg-top-left sf-hero-item--align-right'
        },
        {
          title: 'Colorful summer dresses are already in store',
          subtitle: 'SUMMER COLLECTION 2019',
          buttonText: 'Learn more',
          background: '#fce4ec',
          image: '/homepage/bannerB.jpg'
        }
      ],
      banners: [
        {
          slot: 'banner-A',
          subtitle: 'Dresses',
          title: 'Cocktail & Party',
          description:
            'Find stunning women\'s cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands.',
          buttonText: 'Shop now',
          image: {
            mobile: '/homepage/bannerB.jpg',
            desktop: '/homepage/bannerF.jpg'
          },
          class: 'sf-banner--slim'
        },
        {
          slot: 'banner-B',
          subtitle: 'Dresses',
          title: 'Linen Dresses',
          description:
            'Find stunning women\'s cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands.',
          buttonText: 'Shop now',
          image: '/homepage/bannerE.jpg',
          class: 'sf-banner--slim banner-central'
        },
        {
          slot: 'banner-C',
          subtitle: 'T-Shirts',
          title: 'The Office Life',
          image: '/homepage/bannerC.jpg',
          class: 'sf-banner--slim'
        },
        {
          slot: 'banner-D',
          subtitle: 'Summer Sandals',
          title: 'Eco Sandals',
          image: '/homepage/bannerG.jpg',
          class: 'sf-banner--slim'
        }
      ],
      products: [
        {
          title: 'Cream Beach Bag',
          image: '/homepage/productA.jpg',
          price: { regular: '50.00 $' },
          rating: { max: 5, score: 4 },
          isOnWishlist: true
        },
        {
          title: 'Cream Beach Bag',
          image: '/homepage/productB.jpg',
          price: { regular: '50.00 $' },
          rating: { max: 5, score: 4 },
          isOnWishlist: false
        },
        {
          title: 'Cream Beach Bag',
          image: '/homepage/productC.jpg',
          price: { regular: '50.00 $' },
          rating: { max: 5, score: 4 },
          isOnWishlist: false
        },
        {
          title: 'Cream Beach Bag',
          image: '/homepage/productA.jpg',
          price: { regular: '50.00 $' },
          rating: { max: 5, score: 4 },
          isOnWishlist: false
        },
        {
          title: 'Cream Beach Bag',
          image: '/homepage/productB.jpg',
          price: { regular: '50.00 $' },
          rating: { max: 5, score: 4 },
          isOnWishlist: false
        },
        {
          title: 'Cream Beach Bag',
          image: '/homepage/productC.jpg',
          price: { regular: '50.00 $' },
          rating: { max: 5, score: 4 },
          isOnWishlist: false
        },
        {
          title: 'Cream Beach Bag',
          image: '/homepage/productA.jpg',
          price: { regular: '50.00 $' },
          rating: { max: 5, score: 4 },
          isOnWishlist: false
        },
        {
          title: 'Cream Beach Bag',
          image: '/homepage/productB.jpg',
          price: { regular: '50.00 $' },
          rating: { max: 5, score: 4 },
          isOnWishlist: false
        }
      ]
    };
  },
  methods: {
    toggleWishlist(index) {
      this.products[index].isOnWishlist = !this.products[index].isOnWishlist;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";
#home {
  box-sizing: border-box;
  @include for-desktop {
    max-width: 1240px;
    margin: 0 auto;
  }
}
.section {
  padding: 0 var(--spacer-big);
  @include for-desktop {
    padding: 0;
  }
}
.banner-grid {
  margin: var(--spacer-big) 0;
  @include for-desktop {
    margin: var(--spacer-extra-big) 0;
  }
}
.banner-central {
  @include for-desktop {
    --banner-container-flex: 0 0 70%;
  }
}
.call-to-action {
  margin: var(--spacer-big) 0;
  @include for-desktop {
    margin: calc(var(--spacer-extra-big) * 2) 0;
  }
}
.product-carousel {
  margin: 0 calc(var(--spacer-big) * -1) 0 0;
  @include for-desktop {
    margin: var(--spacer-big) 0;
    --carousel-padding: var(--spacer-big);
    --carousel-max-width: calc(100% - 13.5rem);
  }
}
.product-card {
  max-width: unset;
  &:hover {
    --product-card-box-shadow: 0 4px 20px rgba(168, 172, 176, 0.19);
  }
}
.images-grid {
  max-width: 60rem;
  margin: 0 auto;
  &__row {
    display: flex;
    & + & {
      margin: calc(var(--spacer-big) / 2) 0 0 0;
      @include for-desktop {
        margin: var(--spacer-big) 0 0 0;
      }
    }
  }
  &__col {
    flex: 1;
    margin: 0;
    & + & {
      margin: 0 0 0 calc(var(--spacer-big) / 2);
      @include for-desktop {
        margin: 0 0 0 var(--spacer-big);
      }
    }
  }
}
.banner-app {
  --banner-title-margin: var(--spacer-big) 0 0 0;
  --banner-title-font-size: var(--h1-font-size);
  --banner-title-font-weight: var(--h1-font-weight);
  --banner-subtitle-font-size: var(--font-size-extra-big);
  --banner-subtitle-font-weight: var(--body-font-weight-primary);
  min-height: 26.25rem;
  max-width: 65rem;
  margin: 0 auto;
  padding-right: calc(25% + 5rem);
  padding-left: 2.5rem;
  &__call-to-action {
    display: flex;
    margin: var(--space-big) 0 0 0;
  }
  &__image {
    width: 22%;
    & + & {
      margin: 0 0 0 var(--spacer-big);
    }
  }
}
</style>
