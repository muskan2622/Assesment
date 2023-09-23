
const products = [
  { name: "Vitamin C Serum", category: "Glow", mrp: 1095, rating: 4.3 },
  { name: "Pink Clay Mask", category: "Glow", mrp: 845, rating: 4.7 },
  { name: "Day Cream", category: "Dry", mrp: 845, rating: 4.1 },
  { name: "Night Cream", category: "Dry", mrp: 945, rating: 4.7 },
  { name: "Hyaluronic Acid Serum", category: "Dry", mrp: 975, rating: 4.9 },
  { name: "Acne Busting Serum", category: "Acne", mrp: 975, rating: 4.6 },
  { name: "Green Clay Mask", category: "Acne", mrp: 695, rating: 4.7 },
  { name: "Day Gel", category: "Dry", mrp: 645, rating: 4.9 },
  { name: "AHA Serum", category: "Glow", mrp: 1095, rating: 4.5 },
  { name: "AHA Sleep Mask", category: "Glow", mrp: 995, rating: 4.3 },
];

// Define the recommendation function
function recommendProduct() {
    const productName = document.getElementById("productName").value;
    const rating = parseFloat(document.getElementById("rating").value);

    const inputProduct = products.find((product) => product.name === productName);
    if (!inputProduct) {
        alert("Product not found");
        return;
    }

    if (rating > 4.5) {
        // Recommend a product with a rating above 4.3
        const recommendedProducts = products.filter(
            (product) => product.rating > 4.3 && product.name !== inputProduct.name
        );
        if (recommendedProducts.length > 0) {
            recommendedProducts.sort((a, b) => b.rating - a.rating);
            const sameRatingProducts = recommendedProducts.filter(
                (product) => product.rating === recommendedProducts[0].rating
            );
            if (sameRatingProducts.length > 1) {
                // If 2 or more products have the same rating, recommend from the same category
                const sameCategoryProducts = sameRatingProducts.filter(
                    (product) => product.category === inputProduct.category
                );
                if (sameCategoryProducts.length > 0) {
                    sameCategoryProducts.sort((a, b) => b.mrp - a.mrp);
                    document.getElementById("result").innerHTML = `Recommended Product: ${sameCategoryProducts[0].name}`;
                } else {
                    // If products are not from the same category, recommend the one with the highest MRP
                    sameRatingProducts.sort((a, b) => b.mrp - a.mrp);
                    document.getElementById("result").innerHTML = `Recommended Product: ${sameRatingProducts[0].name}`;
                }
            } else {
                document.getElementById("result").innerHTML = `Recommended Product: ${recommendedProducts[0].name}`;
            }
        } else {
            alert("No product with a rating above 4.3 found");
        }
    } else if (rating >= 4 && rating <= 4.5) {
        // Recommend a product with an average rating above 4.5
        const averageRatingProducts = products.filter(
            (product) => product.rating >= 4.5 && product.name !== inputProduct.name
        );
        if (averageRatingProducts.length > 0) {
            averageRatingProducts.sort((a, b) => b.rating - a.rating);
            const sameRatingProducts = averageRatingProducts.filter(
                (product) => product.rating === averageRatingProducts[0].rating
            );
            if (sameRatingProducts.length > 1) {
                // If 2 or more products have the same rating, recommend from the same category
                const sameCategoryProducts = sameRatingProducts.filter(
                    (product) => product.category === inputProduct.category
                );
                if (sameCategoryProducts.length > 0) {
                    sameCategoryProducts.sort((a, b) => b.mrp - a.mrp);
                    document.getElementById("result").innerHTML = `Recommended Product: ${sameCategoryProducts[0].name}`;
                } else {
                    // If products are not from the same category, recommend the one with the highest MRP
                    sameRatingProducts.sort((a, b) => b.mrp - a.mrp);
                    document.getElementById("result").innerHTML = `Recommended Product: ${sameRatingProducts[0].name}`;
                }
            } else {
                document.getElementById("result").innerHTML = `Recommended Product: ${averageRatingProducts[0].name}`;
            }
        } else {
            alert("No product with an average rating above 4.5 found");
        }
    } else {
        // Recommend a product from another category with the highest rating
        const otherCategoryProducts = products.filter(
            (product) => product.category !== inputProduct.category && product.name !== inputProduct.name
        );
        if (otherCategoryProducts.length > 0) {
            otherCategoryProducts.sort((a, b) => b.rating - a.rating);
            const sameRatingProducts = otherCategoryProducts.filter(
                (product) => product.rating === otherCategoryProducts[0].rating
            );
            if (sameRatingProducts.length > 1) {
                // If 2 or more products have the same rating, recommend the one with the lowest MRP
                sameRatingProducts.sort((a, b) => a.mrp - b.mrp);
                document.getElementById("result").innerHTML = `Recommended Product: ${sameRatingProducts[0].name}`;
            } else {
                document.getElementById("result").innerHTML = `Recommended Product: ${otherCategoryProducts[0].name}`;
            }
        } else {
            alert("No product from another category with the highest rating found");
        }
    }
}
