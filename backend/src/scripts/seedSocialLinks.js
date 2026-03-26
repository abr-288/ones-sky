const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seedSocialLinks() {
  try {
    // Liens sociaux réels pour ONE SKY
    const socialLinks = [
      { label: "Facebook", url: "https://www.facebook.com/onesky.space" },
      { label: "Instagram", url: "https://www.instagram.com/onesky.space" },
      { label: "Twitter", url: "https://twitter.com/onesky_space" },
      { label: "LinkedIn", url: "https://www.linkedin.com/company/onesky-space" },
      { label: "YouTube", url: "https://www.youtube.com/@onesky-space" }
    ];

    // Mettre à jour les settings avec les liens sociaux
    const settings = await prisma.setting.upsert({
      where: { id: 'global' },
      update: {
        socialLinks: JSON.stringify(socialLinks),
        siteName: "ONESKY",
        footerText: `© ${new Date().getFullYear()} ONESKY Tous droits réservés.`,
        footerDescription: "Leader mondial de l'intelligence géospatiale. Nous connectons et surveillons le monde depuis l'espace pour une prise de décision éclairée."
      },
      create: {
        id: 'global',
        socialLinks: JSON.stringify(socialLinks),
        siteName: "ONESKY",
        footerText: `© ${new Date().getFullYear()} ONESKY Tous droits réservés.`,
        footerDescription: "Leader mondial de l'intelligence géospatiale. Nous connectons et surveillons le monde depuis l'espace pour une prise de décision éclairée."
      }
    });

    console.log('✅ Liens sociaux configurés avec succès !');
    console.log('📱 Réseaux sociaux ajoutés :');
    socialLinks.forEach(link => {
      console.log(`   • ${link.label}: ${link.url}`);
    });

    console.log('\n🔧 Settings mis à jour :');
    console.log(`   • Site Name: ${settings.siteName}`);
    console.log(`   • Footer: ${settings.footerText}`);
    console.log(`   • Description: ${settings.footerDescription}`);

  } catch (error) {
    console.error('❌ Erreur lors du seeding des liens sociaux :', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedSocialLinks();
