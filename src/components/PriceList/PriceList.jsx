const PriceList = () => {
    const gymPriceOptions = [
        {
          membershipType: "Basic",
          price: 29.99,
          benefits: ["Access to gym facilities", "Locker room usage", "Fitness classes (limited)"],
        },
        {
          membershipType: "Standard",
          price: 49.99,
          benefits: ["Full access to gym facilities", "Locker room usage", "Unlimited fitness classes"],
        },
        {
          membershipType: "Premium",
          price: 79.99,
          benefits: [
            "Full access to gym facilities",
            "Locker room usage",
            "Unlimited fitness classes",
            "Personal trainer sessions (2 per month)",
          ],
        },
      ];
      
    return (
        <div>
            <h1 className="text-3xl text-center text-purple-900">Awesome Price</h1>
        </div>
    );
};

export default PriceList;