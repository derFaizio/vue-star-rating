<template>
    <div>
        <div>
            <star-rating v-model="rating" active-color="black" :increment="0.01"></star-rating> {{rating}}
        </div>
        <div>
            <review :reviews='reviews'></review>
        </div>
    </div>

</template>

<script type="text/javascript">
import StarRating from '../../dist/star-rating.min.js';

export default {
    components: {
        StarRating
    },
    data(){
    	return{
            rating: 4.38,
            reviews: [{
                comment: 'first comment',
                rating: {
                cleanliness: 5,
                overallRating: 3,
                staff: 4,
                location: 3,
                comfort: 3
                }
            }, {
                comment: 'second comment',
                rating: {
                cleanliness: 4,
                overallRating: 4,
                staff: 3,
                location: 5,
                comfort: 4
                }
            }]
    	}
    }
}
</script>
